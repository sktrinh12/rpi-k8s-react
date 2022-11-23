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
    # startup message display
    lcd_class = lcd()
    lcd_class.lcd_display_string(f'{dct["POD_NAME"]}|{dct["POD_IP"]}|{dct["POD_NAMESPACE"]}', 1)
    lcd_class.lcd_display_string(f'{dct["POD_SVC"]}|{dct["NODE_NAME"]}', 2)

@app.on_event("shutdown")
def shutdown_event():
    lcd_class.lcd_clear()

@app.get("/")
def read_root():
    return {"Hello": "Raspberry Pi with LCD display!"}

@app.get("/input")
async def test(string1: str, string2: str, delay: int):
    lcd_class = lcd()
    lcd_class.lcd_display_string(string1, 1)
    lcd_class.lcd_display_string(string2, 2)
    sleep(int(delay))
    lcd_class.lcd_clear()
    res = {"MSG": f"Completed run of displaying: {string1} & {string2}, delay of: {delay}"}
    rtn = dict(STATUS_CODE=status.HTTP_200_OK)
    return {**res, **rtn}
