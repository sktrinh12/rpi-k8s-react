from time import sleep
from datetime import datetime
# import subprocess
# import shlex
import pprint
import requests
from freezegun import freeze_time

TIME_API = "http://worldtimeapi.org/api/timezone/"

def get_info():
    """
    get the information about the kubernetes environ
    variables and display on lcd screen in a loop
    """
    dct_keys = list(dct.keys())
    max_loop = int(len(dct)/2)
    lbl_evens = dct_keys[::2]
    lbl_odds = dct_keys[1::2]
    # startup message display
    lcd_class.lcd_clear()
    for _ in range(max_loop*2):
        cnt = int(_ % max_loop)
        #print(f'>>{dct[lbl_evens[cnt]]}')
        #print(f'##{dct[lbl_odds[cnt]]}')
        lcd_class.lcd_display_string(dct[lbl_evens[cnt]], 1)
        lcd_class.lcd_display_string(dct[lbl_odds[cnt]], 2)
        sleep(5)
        lcd_class.lcd_clear()
    return 0

def binary_output(input_ints):
    """
    input - input_ints: tuple of three elements
    corresponds to H:M:S
    output - payload: json compatible python dict
    that has a list of tuples

    generate json payload that includes binary mapping to
    display on leds and within js on frontend using pure
    binary with only three columns
    """
    payload = {}
    for c in range(len(input_ints)):
        array_vals = []
        input_bit = input_ints[c]
        # only go to 7 because the time values never pass 23
        for y in range(7):
            # binary AND operation with 0000001 to get even/odd value that equates
            # to whether to turn on or off
            bit = input_bit & 0x01
            array_vals.append((c, y, bit))
            # right shift the value to divide by 2
            input_bit = input_bit >> 1
        payload[f'col_{c}'] = array_vals
    return payload

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
    time_prefix = ['HH', 'MM', 'SS']
    first_digit = map(lambda x: x // 10, input_ints)
    second_digit = map(lambda x: x % 10, input_ints)
    payload = {time_prefix[i] :binary_output(bit) for i,bit in
               enumerate(zip(first_digit, second_digit))}
    return payload


def display_leds(payload):
    """
    trigger leds based on the 1's that indicate
    to light up using the neopixel adafruit library
    """
    nbits = 7
    if 'HH' in payload:
        # check if nested dictionary for the bcd_output
        for key, val in payload.items():
            for col in range(2):
                for el in range(nbits):
                    curr_elm = payload[key][f'col_{col}'][el]
                    # if the bit is 1
                    if curr_elm[2] == 1:
                        print(f"key: {key}, \
                              x: {curr_elm[0]}, \
                              y: {curr_elm[1]}, \
                              col: {col}")
                        # disp.pixel(curr_elm[0], curr_elm[1], col)
    else:
        for col in range(len(payload)):
            for el in range(nbits):
                curr_elm = payload[f'col_{col}'][el]
                if curr_elm[2] == 1:
                    print(f"x: {curr_elm[0]}, \
                          y: {curr_elm[1]}, \
                          col: {col}")
                    # disp.pixel(curr_elm[0], curr_elm[1], col)

def change_freeze_time(other_datetime, freezetime):
    # stop current frozen time
    freezetime.stop()
    # define new frozen time
    freezetime = freeze_time(other_datetime, tick=True)
    freezetime.start()
    ts = datetime.now().strftime('%Y-%b-%dT%H:%M:%S')
    return ts


def sync_time(tzone, freezetime):
    """
    input - tzone: str, the time zone
    output - dictionary, the shell output and the timestamp
    synchronise the system time with the worldtimeapi time based on
    user's input for timezone
    """

    # fetch api time
    response = requests.get(f'{TIME_API}{tzone}')
    response.close()
    json = response.json()
    current_time = json["datetime"]
    the_date, the_time = current_time.split("T")
    year, month, mday = [int(x) for x in the_date.split("-")]
    # 2022-11-28T14:14:07.981568+08:00
    the_time = the_time.split(".")[0]
    hours, minutes, seconds = [int(x) for x in the_time.split(":")]
    # set time on system
    time_tuple = (year, month, mday, hours, minutes, seconds)
    other_datetime = datetime(year=year, month=month, day=mday,
                                       hour=hours, minute=minutes, second=seconds)
    new_datetime = change_freeze_time(other_datetime, freezetime)
    # time_string = datetime(*time_tuple).isoformat()
    # subprocess.call(shlex.split("timedatectl set-ntp false"))  # May be necessary
    # subprocess.call(shlex.split("date -s '%s'" % time_string))
    # hwclock also called Real Time Clock (RTC), is a utility for accessing the hardware clock
    # -w, -systohoc : It will set the RTC from the system time
    # subprocess.call(shlex.split("hwclock -w"))
    # output = subprocess.check_output(shlex.split("date"))
    # print(f'Date output: {new_datetime}')
    return {'DATE': new_datetime, 'TIME_TUPLE' : time_tuple}


# if __name__ == "__main__":
    # pprint.pprint(binary_output((10,30,15)))
    # pprint.pprint(bcd_output((10,30,15)))
    # data = bcd_output((10,30,15))
    # data = binary_output((10,30,15))
    # pprint.pprint(data)
    # display_leds(data)
