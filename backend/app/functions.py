from time import sleep
from datetime import datetime
# import pprint
import requests
from freezegun import freeze_time

TIME_API = "https://timeapi.io/api/"
unit_time_dct = {'binary':['H', 'M', 'S'], 'bcd': ['H','H_', 'M','M_', 'S','S_']}

def get_info(lcd_class, env_dct):
    """
    get the information about the kubernetes environ
    variables and display on lcd screen in a loop
    """
    dct_keys = list(env_dct.keys())
    max_loop = int(len(env_dct)/2)
    lbl_evens = dct_keys[::2]
    lbl_odds = dct_keys[1::2]
    # startup message display
    lcd_class.lcd_clear()
    for _ in range(max_loop*2):
        cnt = int(_ % max_loop)
        #print(f'>>{env_dct[lbl_evens[cnt]]}')
        #print(f'##{env_dct[lbl_odds[cnt]]}')
        lcd_class.lcd_display_string(env_dct[lbl_evens[cnt]], 1)
        lcd_class.lcd_display_string(env_dct[lbl_odds[cnt]], 2)
        sleep(5)
        lcd_class.lcd_clear()
    return 0

def binary_output(input_ints, unit_time):
    """
    input - input_ints: tuple of three elements
    corresponds to H:M:S
    output - payload: json compatible python dict
    that has a list of tuples

    generate json payload that includes binary mapping to
    display on leds and within js on frontend using pure
    binary with only three columns
    """
    assert len(unit_time) == len(input_ints), f"inputs must be same length, {len(input_ints)} != {len(unit_time)}"
    num_bits = 4 if len(unit_time) == 6 else 7
    payload = {}
    for i in range(len(input_ints)):
        array_vals = []
        input_bit = input_ints[i]
        # only go to 7 or 4 because the time values never pass 60, pos 7 in
        # binary=64; or pos 4 binary=8
        for y in range(num_bits):
            # binary AND operation with 0000001 to get even/odd value that equates
            # to whether to turn on or off
            bit = input_bit & 0x01
            array_vals.append(bit)
            # right shift the value to divide by 2
            input_bit = input_bit >> 1
        # reverse the order so it shows up properly on frontend
        payload[unit_time[i]] = array_vals[::-1]

    time_units = {'hour':"%02d"%input_ints[0], 'minute':"%02d"%input_ints[1],
                  'seconds':"%02d"%input_ints[2]}
    return {**payload, **time_units}

def bcd_output(input_ints):
    """
    input - input_ints: tuple of six elements which
    correspond to each digit of the time, HH:MM:SS
    output - payload: json compatible nested python dict
    that has a list of tuples for each pair of columns
    that are grouped by the hour, minute, seconds

    generate json payload that includes binary coded decimal
    mapping to display on leds and within js on frontend
    use of 6 columns
    """
    time_digits = [0]*6

    # floor divide all by 10
    time_digits[::2] = list(map(lambda x: x // 10, input_ints))
    # modulus all by 10
    time_digits[1::2] = list(map(lambda x: x % 10, input_ints))
    payload = binary_output(time_digits, unit_time_dct['bcd'])
    time_units = {'hour':"%02d"%input_ints[0], 'minute':"%02d"%input_ints[1],
                  'seconds':"%02d"%input_ints[2]}
    return {**payload, **time_units}


def display_leds(payload, pixels, rgb):
    """
    input
    payload: dictionary that shows which leds to turn on;
    pixel: class of the neopixel that instantiates the rpi connection;
    rgb: is the 3 element tuple that contains what combo of colours to pass to neopixel;
    trigger leds based on the 1's that indicate to light up using the neopixel
    based on adafruit library
    """
    r, g, b = rgb
    cnt = 0
    for key, val in payload.items():
        for i, el in enumerate(val):
            # if the bit is 1
            if el == 1:
                print(f"key: {key}, \
                      i: {i}, \
                      cnt: {cnt}")
                # pixels[cnt] = (r,g,b)
            cnt += 1

def change_freeze_time(other_datetime, freezetime):
    # stop current frozen time
    freezetime.stop()
    # define new frozen time
    freezetime = freeze_time(other_datetime, tick=True)
    freezetime.start()
    # ts = datetime.now().strftime('%Y-%b-%dT%H:%M:%S')
    # return ts


def sync_time(tzone, freezetime):
    """
    input - tzone: str, the time zone
    output - tuple, the timestamp as integer numbers
    synchronise the system time with the worldtimeapi time based on
    user's input for timezone
    """

    # fetch api time
    response = requests.get(f'{TIME_API}/Time/current/zone?timeZone={tzone}')
    response.close()
    json = response.json()
    year = json["year"]
    month = json["month"]
    mday = json["day"]
    hours = json["hour"]
    seconds = json["seconds"]
    minutes = json["minute"]
    # set time on system
    time_tuple = (year, month, mday, hours, minutes, seconds)
    other_datetime = datetime(year=year, month=month, day=mday,
                                       hour=hours, minute=minutes, second=seconds)
    change_freeze_time(other_datetime, freezetime)
    return time_tuple

def get_current_time():
    """
    output - a 3 element tuple (H, M, S); in order to be inputted into
    the binary_output function
    get the current time that is referenced by freezegun's time that was set
    It converts the string into a datetiem object so that it can be converted
    into binary.

    """
    dt = datetime.now()
    return  (dt.hour, dt.minute, dt.second)
