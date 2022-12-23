import React, { useEffect, useState, useRef } from "react";
import ScreenTwo from "./ScreenTwo";
import ClockType from "./ClockType";
import Timezone from "./Timezone";
import Tempdata from "./Tempdata";

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  );
};

const baseURL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8000";
const wsURL = `ws${baseURL.substring(4, baseURL.length)}/ctime`;
const tzoneURL = `${baseURL}/tzones`;
const width = 100;
const height = 97;
let timeZones = ["Asia/Ho_Chi_Minh"];
let timer;

const Clock = () => {
  const [tzone, setTzone] = useState("Asia/Ho_Chi_Minh");
  const [data, setData] = useState(Tempdata);
  const [clockType, setClockType] = useState("bcd");
  const dataLength = Object.keys(data).length;
  const ws = useRef(null);
  // if bcd is selected need 6 columns (keys) HH:MM:SS
  let numCirclesX = 6;
  let numCirclesY = 4;
  // if binary is selected only need three columns (keys) H:M:S
  if (dataLength === 3) {
    numCirclesX = 3;
    numCirclesY = 7;
  }
  const XSpacing = width / (numCirclesX + 1);
  const YSpacing = height / (numCirclesY + 1);
  const arrayColumns = range(
    YSpacing,
    YSpacing + numCirclesY * YSpacing,
    YSpacing
  );
  const arrayRows = range(
    XSpacing,
    XSpacing + numCirclesX * XSpacing,
    XSpacing
  );
  // console.log(arrayColumns);
  // console.log(arrayRows);

  let getDiffTime = async () => {
    const backendURL = `${baseURL}/binary-clock?clock_type=${clockType}&tzone=${tzone}`;
    // console.log(backendURL);
    try {
      let fetched = await fetch(backendURL);
      if (fetched) {
        let json = await fetched.json();
        // console.log(json);
        setData(json);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const initWebSocket = (socket) => {
    socket.onopen = (event) => {
      console.log("websocket open");
    };

    socket.onmessage = (event) => {
      const json = JSON.parse(event.data);
      setData(json);
    };

    socket.onclose = (event) => {
      console.log("websocket closed");
    };

    socket.onerror = (err) => {
      console.error(`Socket encountered error: ${err.message}; closing socket`);
      socket.close();
    };
  };

  // time zone input box
  const searchTimeZone = (event) => {
    let input = event.target.value;
    let matches = [],
      i;

    if (input.length > 1) {
      for (i = 0; i < timeZones.length; i++) {
        if (timeZones[i].match(input)) {
          matches.push(timeZones[i]);
        }
      }
    }
    setTzone(matches[0]); // should always be one element
    // console.log(matches);
  };

  // get time zone data
  const getTzones = async () => {
    try {
      let fetched = await fetch(tzoneURL);
      if (fetched) {
        timeZones = await fetched.json();
        // console.log(timeZones);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // time zone submit button
  const onClickSubmit = () => {
    if (timer) {
      clearInterval(timer);
    }
    console.log(`tzone: ${tzone}`);
    getDiffTime();
    console.log(`clock: ${clockType}`);
    // console.log(`time: ${}`);
    timer = setInterval(() => {
      ws.current.send(clockType);
    }, 1000);
  };

  const handleClockDropdownChange = (e) => {
    setClockType(e.target.value);
  };

  // initialise websocket on mount
  useEffect(() => {
    const socket = new WebSocket(wsURL);
    getTzones();
    ws.current = socket;
    initWebSocket(socket);
    return () => {
      socket.close();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ScreenTwo
        data={data}
        arrayColumns={arrayColumns}
        arrayRows={arrayRows}
      />
      <div className="dropdown-style">
        <Timezone
          timeZones={timeZones}
          tzone={tzone}
          searchTimeZone={searchTimeZone}
        />
        <ClockType
          clockType={clockType}
          handleClockDropdownChange={handleClockDropdownChange}
        />
      </div>
      <button onClick={onClickSubmit}>Get Time!</button>
    </>
  );
};

export default Clock;
