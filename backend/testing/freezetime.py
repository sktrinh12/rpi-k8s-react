from freezegun import freeze_time
import datetime

def test():
    initial_datetime = datetime.datetime(year=1, month=7, day=12,
    hour=15, minute=6, second=3)

    other_datetime = datetime.datetime(year=2, month=8, day=13,
    hour=14, minute=5, second=0)

    with freeze_time(initial_datetime) as frozen_datetime:
        assert frozen_datetime() == initial_datetime

        frozen_datetime.move_to(other_datetime)
        assert frozen_datetime() == other_datetime

        frozen_datetime.move_to(initial_datetime)
        assert frozen_datetime() == initial_datetime

    ft = freeze_time(initial_datetime)
    ft.start()
    assert datetime.datetime.now() == initial_datetime
    ft.stop()
    ft = freeze_time(other_datetime)
    ft.start()
    assert datetime.datetime.now() == other_datetime 
    ft.stop()

if __name__ == "__main__":
    test()
