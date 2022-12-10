import datetime

rtc = datetime.datetime.now()

MINUTE = rtc.minute
HOUR = rtc.hour
SECONDS = rtc.second

print(f'{HOUR}:{MINUTE}:{SECONDS}')

def binary_at(b):
    y = 8
    while y > 1:
        print(f'b: {b}, y: {y}')
        bit = b & 0x01
        if bit == 1:
            print('-'*10)
            print('X')
            print('-'*10)
        y = y - 1
        b = b >> 1



binary_at(MINUTE)


print(10 & 0x01)

print(11 >> 1)

