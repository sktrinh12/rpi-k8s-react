import React, { useEffect, useState } from "react";
import ScreenTwo from "./ScreenTwo";

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  );
};

const baseURL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8000";
const yStart = 15;
const yStep = 65;
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
  const xStart = data.length === 3 ? 275 : 55;
  const numRows = data.length === 3 ? 4 : 8;
  const numColumns = data.length === 3 ? 3 : 6;
  const arrayRows = range(xStart, xStart + numColumns * xStart, xStep);
  const arrayColumns = range(yStart, yStart + numRows * yStart, yStep);
  // console.log(data);

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
    <ScreenTwo data={data} arrayColumns={arrayColumns} arrayRows={arrayRows} />
  );
};

export default Clock;
