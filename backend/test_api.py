from fastapi.testclient import TestClient
from app.app import app
from time import sleep
from random import randint
from dateutil import parser 

client = TestClient(app)

def test_valid_query_params():
    tzones = ["America/Argentina/San_Luis",
    "Africa/Accra",
    "America/Los_Angeles",
    "Asia/Macau",
    "Asia/Ho_Chi_Minh",
    "Australia/Adelaide",
    "Europe/Budapest",
    "Pacific/Easter",
    "Pacific/Wake"]
    clock_types = ["binary", "bcd"]
    for i, tz in enumerate(tzones):
        response = client.get(f"/binary-clock?tzone={tz}&clock_type={clock_types[randint(0,1)]}")
        assert response.status_code == 200
        json_response = response.json()
        assert parser.parse(json_response["DATE"])
        sleep(1.25)

def test_invalid_tzones():
    tzones = ["NotCountry/NotCity",
    "Afiza/Avatar",
    "Bogus/Shit",
    "Fuck/You",
    "Hello/World",
    "Yahoo/COM",
    "Funny/Bunny", 
    "In-N-Out/Hamburger", 
    "Snowboard/Skateboard"]
    for tz in tzones:
        response = client.get(f"/binary-clock?tzone={tz}&clock_type=binary")
        assert response.status_code == 409
        assert response.json() == {'detail': f'That timezone does not exist, {tz}'}
        sleep(1.25)


def test_invalid_clock_types():
    clktypes = ["infect",
    "inappropriate",
    "victory",
    "empire",
    "bitch",
    "concentration",
    "burn",
    "beer"]
    for ct in clktypes:
        url = f"/binary-clock?tzone=Asia/Ho_Chi_Minh&clock_type={ct}"
        response = client.get(url)
        print(url)
        if len(ct) > 6:
            assert response.status_code == 422 
            assert response.json()['detail'][0]['type'] == 'value_error.any_str.max_length'
        elif len(ct) < 3:
            assert response.status_code == 422 
            assert response.json()['detail'][0]['type'] == 'value_error.any_str.min_length'
        else:
            assert response.status_code == 409
            assert response.json() == {'detail': f'Clock-type must be either bcd or binary, {ct} is invalid'}
        sleep(1.25)
