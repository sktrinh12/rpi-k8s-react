import React, { useEffect, useState } from "react";
import Screen from "./Screen";

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  );
};

const baseURL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8000";
const wsURL = `ws${baseURL.substring(4, baseURL.length)}/ctime`;
const tzoneURL = `${baseURL}/tzones`;
const yStart = 15;
const yStep = 55;
const xStep = 75;
let timeZones = ["Asia/Ho_Chi_Minh"];
let ws = new WebSocket(wsURL);

const Clock = () => {
  const clockType = "bcd";
  const [tzone, setTzone] = useState("Asia/Ho_Chi_Minh");
  const [data, setData] = useState({});
  const dataLength = Object.keys(data).length;
  // if bcd is selected need 6 columns (keys) HH:MM:SS
  let xStart = 55; // starting x coordinate
  let numRows = 6;
  let numColumns = 4;
  // if binary is selected only need three columns (keys) H:M:S
  if (dataLength === 3) {
    xStart = 225;
    numRows = 3; // looking at it 90 degree flipped
    numColumns = 7;
  }
  const arrayRows = range(xStart, xStart + numRows * xStep, xStep);
  const arrayColumns = range(yStart, yStep * numColumns, yStep);
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

  const initWebSocket = () => {
    ws.onopen = (event) => {
      ws.send(clockType); // pass to backend
    };

    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      setData(json);
    };

    ws.onclose = () => {
      initWebSocket();
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
    console.log(`tzone: ${tzone}`);
    getDiffTime();
    ws.send(clockType);
  };

  // initialise websocket on mount
  useEffect(() => {
    initWebSocket();
    getTzones();
    return () => {
      ws.close();
    };
    // eslint-disable-next-line
  }, []);

  // just get the first time from timeapi.io; then get current time every sec
  useEffect(() => {
    getDiffTime();
    let everySecond = setInterval(() => ws.send(clockType), 1000);
    return () => {
      clearInterval(everySecond);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Screen data={data} arrayColumns={arrayColumns} arrayRows={arrayRows} />
      <label for="timezones">Time Zones:</label>&nbsp;&nbsp;
      <input list="timezones" onChange={searchTimeZone} placeholder={tzone} />
      <datalist id="timezones" name="timezones">
        {timeZones.map((tz) => {
          return <option key={tz} value={tz} />;
        })}
      </datalist>
      <button onClick={onClickSubmit}>Submit</button>
    </>
  );
};

export default Clock;
