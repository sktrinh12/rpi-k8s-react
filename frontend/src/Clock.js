import React, { useEffect, useState } from "react";
// import ScreenTwo from "./ScreenTwo";
import Screen from "./Screen";

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  );
};

const baseURL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8000";
const yStart = 15;
const yStep = 55;
const xStep = 75;

const Clock = () => {
  const clockType = "binary";
  const tzone = "Asia/Ho_Chi_Minh";
  const [data, setData] = useState({});
  // const timeData = Object.keys(data)
  //   .filter((key) => /^H|^M|^S/.test(key))
  //   .reduce((obj, key) => {
  //     return Object.assign(obj, {
  //       [key]: data[key],
  //     });
  //   }, {});
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

  let getTime = async (changeTime = true) => {
    try {
      const backendURL = [
        baseURL,
        changeTime
          ? `/binary-clock?clock_type=${clockType}&tzone=${tzone}`
          : `/ctime?clock_type=${clockType}`,
      ].join("");
      // console.log(backendURL);
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

  useEffect(() => {
    getTime();
    let everySecond = setInterval(() => getTime(false), 5000);
    return () => {
      clearInterval(everySecond);
    };
  }, []);

  return (
    <Screen data={data} arrayColumns={arrayColumns} arrayRows={arrayRows} />
  );
};

export default Clock;
