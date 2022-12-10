from fastapi import FastAPI, status
from app.RPi_I2C_driver import *
from os import getenv
from fastapi.middleware.cors import CORSMiddleware
from app.functions import *

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
freezetime = freeze_time(datetime.now(), tick=True)
freezetime.start()

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
    freezetime.stop()


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

@app.get("/binary-clock")
async def binary_clock(tzone: str):
    output_dct = sync_time(tzone, freezetime)
    print(output_dct)
    time_tuple = output_dct['TIME_TUPLE']
    hour = time_tuple[0]
    minute = time_tuple[1]
    seconds = time_tuple[2]
    data = binary_output((hour, minute, seconds))
    # display_leds(data)
    return data

@app.get("/ctime")
async def current_time():
    return {"TIME": datetime.now().strftime("%Y-%b-%dT%H:%M:%S")}

@app.get("/tzones")
async def time_zones():
    response = requests.get(TIME_API)
    response.close()
    json = response.json()
    return json
