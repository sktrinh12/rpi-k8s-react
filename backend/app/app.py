from fastapi import FastAPI, status
from app.RPi_I2C_driver import *
from time import sleep
from os import getenv
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# for cors
origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://192.168.1.12",
    "http://k8s-main",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dct = {}
lcd_class = lcd()
lcd_class.lcd_clear()

def get_info():
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

@app.on_event("startup")
async def startup_event():
    dct["NODE_NAME"] = getenv("NODE_NAME", "NODE_NAME")
    dct["POD_NAMESPACE"] = getenv("POD_NAMESPACE", "POD_NAMESPACE")
    dct["POD_NAME"] = getenv("POD_NAME", "POD_NAME")
    dct["POD_IP"] = getenv("POD_IP", "POD_IP")
    dct["POD_SVC"] = getenv("POD_SVC", "POD_SVC")
    if len(dct) % 2 != 0:
        dct["PHANTOM"] = ""


@app.on_event("shutdown")
def shutdown_event():
    lcd_class.lcd_clear()


@app.get("/")
def read_root():
    welcome = {"Hello": "Raspberry Pi with LCD display!"}
    return {**welcome, **dct}


@app.get("/info")
def info():
    res = get_info()
    rtn = dict(STATUS_CODE=status.HTTP_200_OK)
    return {**dct, **rtn}


@app.get("/lcd")
async def lcd(string_top: str, string_bottom: str, delay: int):
    lcd_class.lcd_clear()
    lcd_class.lcd_display_string(string_top.upper(), 1)
    lcd_class.lcd_display_string(string_bottom.upper(), 2)
    if delay > 0:
        sleep(int(delay))
        lcd_class.lcd_clear()
    res = {"MSG": f"Dispalyed: {string_top} & {string_bottom}, delay of: {delay}"}
    rtn = dict(STATUS_CODE=status.HTTP_200_OK)
    return {**res, **rtn}
