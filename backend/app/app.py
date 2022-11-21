from fastapi import FastAPI
import app.RPi_I2C_driver
from time import *

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "Raspberry Pi!"}
