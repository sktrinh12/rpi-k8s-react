from fastapi import FastAPI, status
from app.RPi_I2C_driver import *
from time import sleep
from os import getenv

app = FastAPI()

dct = {}

@app.on_event("startup")
async def startup_event():
    dct["NODE_NAME"] = getenv("NODE_NAME")
    dct["POD_NAMESPACE"] = getenv("POD_NAMESPACE")
    dct["POD_NAME"] = getenv("POD_NAME")
    dct["POD_IP"] = getenv("POD_IP")
    dct["POD_SVC"] = getenv("POD_SVC")
    nbr_items = len(dct)
    print_last_bottom = True
    print_bottom = True
    if nbr_items % 2 != 0:
        nbr_items += 1
        print_last_bottom = False
    # startup message display
    lcd_class = lcd()
    dct_keys = list(dct.keys())
    cnt = 0
    max_loop = nbr_items/2
    while True:
        cnt = cnt % max_loop
        lcd_class.lcd_display_string(f'{dct[dct_keys[cnt]]}, 1)
        if cnt == max_loop - 1 and not print_last_bottom:
            print_bottom = False
        if print_bottom:
            lcd_class.lcd_display_string(f'{dct[dct_keys[cnt+1]]}, 2)
        cnt += 1
        print(cnt)
        sleep(2)

@app.on_event("shutdown")
def shutdown_event():
    lcd_class = lcd()
    lcd_class.lcd_clear()

@app.get("/")
def read_root():
    return {"Hello": "Raspberry Pi with LCD display!"}

@app.get("/lcd")
async def test(string_top: str, string_bottom: str, delay: int):
    lcd_class = lcd()
    lcd_class.lcd_display_string(string_top, 1)
    lcd_class.lcd_display_string(string_bottom, 2)
    if delay > 0:
        sleep(int(delay))
        lcd_class.lcd_clear()
    res = {"MSG": f"Completed run of displaying: {string_top} & {string_bottom}, delay of: {delay}"}
    rtn = dict(STATUS_CODE=status.HTTP_200_OK)
    return {**res, **rtn}
