from fastapi import FastAPI, status, Query, Path
from fastapi.exceptions import HTTPException, WebSocketException
# from app.RPi_I2C_driver import *
from os import getenv
from re import match
from json import dumps, loads
from app.socketmanager import *
from fastapi.middleware.cors import CORSMiddleware
from app.functions import *
from fastapi.responses import HTMLResponse

app = FastAPI()
socket_manager = SocketManager()

# for cors
origins = [
    "http://localhost:3000",
    "localhost:3000",
    "http://192.168.1.12", # linux laptop fixed-ip
    "http://k8s-main", # resolv.conf
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

env_dct = {}
# lcd_class = lcd()
# lcd_class.lcd_clear()
freezetime = freeze_time(datetime.now(), tick=True)
freezetime.start()
response = requests.get(f'{TIME_API}/TimeZone/AvailableTimeZones')
response.close()
timezones = response.json()
clock_types = ['bcd', 'binary']

@app.on_event("startup")
async def startup_event():
    global env_dct
    env_dct["NODE_NAME"] = getenv("NODE_NAME", "NODE_NAME")
    env_dct["POD_NAMESPACE"] = getenv("POD_NAMESPACE", "POD_NAMESPACE")
    env_dct["POD_NAME"] = getenv("POD_NAME", "POD_NAME")
    env_dct["POD_IP"] = getenv("POD_IP", "POD_IP")
    env_dct["POD_SVC"] = getenv("POD_SVC", "POD_SVC")
    if len(env_dct) % 2 != 0:
        env_dct["PHANTOM"] = ""


@app.on_event("shutdown")
def shutdown_event():
    # lcd_class.lcd_clear()
    freezetime.stop()


@app.get("/")
async def read_root():
    welcome = {"Hello": "Raspberry Pi with LCD display!"}
    return {**welcome, **env_dct}


@app.get("/info")
async def info():
    res = get_info(lcd_class, env_dct)
    rtn = dict(STATUS_CODE=status.HTTP_200_OK)
    return {**env_dct, **rtn}


@app.get("/lcd")
async def lcd(string_top: str = Query(min_length=1, max_length=16), string_bottom: str = Query(min_length=1, max_length=16), elapse: int = Path(title="Time elapsed for displaying on lcd screen", ge=0)):
    # lcd_class.lcd_clear()
    # lcd_class.lcd_display_string(string_top.upper(), 1)
    # lcd_class.lcd_display_string(string_bottom.upper(), 2)
    if elapse > 0:
        sleep(int(elapse))
        # lcd_class.lcd_clear()
    res = {"MSG": f"Dispalyed: {string_top} & {string_bottom}, elapse time: {elapse}"}
    rtn = dict(STATUS_CODE=status.HTTP_200_OK)
    return {**res, **rtn}

@app.get("/binary-clock")
async def binary_clock(tzone: str = Query(...), clock_type: str = Query(min_length=3, max_length=6)):
    if tzone not in timezones:
        raise HTTPException( status_code=409, detail=f"That timezone does not exist, {tzone}")
    if clock_type not in clock_types:
        raise HTTPException( status_code=409, detail=f"Clock-type must be either {' or '.join(clock_types)}, {clock_type} is invalid")
    output_datetime_dct = sync_time(tzone, freezetime)
    time_tuple = output_datetime_dct['TIME_UNITS']
    hour = time_tuple[3]
    minute = time_tuple[4]
    seconds = time_tuple[5]
    time_units = {'hour':"%02d"%hour, 'minute':"%02d"%minute, 'seconds':"%02d"%seconds}
    if clock_type == 'binary':
        data = binary_output((hour, minute, seconds), unit_time_dct[clock_type])
    elif clock_type == 'bcd':
        data = bcd_output((hour, minute, seconds))
    # data.update(output_datetime_dct)
    # display_leds(data, neopixel, rgb)
    return {**data, **time_units}

@app.websocket("/ctime")
async def current_time(websocket: WebSocket):
    await socket_manager.connect(websocket)
    try:
        while True:
            clock_type = await websocket.receive_text()
            clock_type = clock_type.strip()
            if not match('[binary|bcd]', clock_type):
                print(f'socket message must either be binary or bcd, not {clock_type}')
                raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
            hour, minute, seconds = get_current_time()
            time_units = {'hour':"%02d"%hour, 'minute':"%02d"%minute, 'seconds':"%02d"%seconds}
            if clock_type == 'binary':
                data = binary_output((hour, minute, seconds), unit_time_dct[clock_type])
            elif clock_type == 'bcd':
                data = bcd_output((hour, minute, seconds))
            data = {**data, **time_units}
            print(data)
            await socket_manager.send_data(dumps(data), websocket)
    except WebSocketDisconnect:
        # await websocket.close()
        socket_manager.disconnect(websocket)
        await socket_manager.broadcast('websocket disconnect')

@app.get("/tzones")
async def time_zones():
    return timezones
