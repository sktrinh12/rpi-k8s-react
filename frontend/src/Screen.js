import React from "react";
import Led from "./Led";

const colours = {
  blue: "#005dc3",
  red: "#b70000",
  green: "#6aa84f",
  grey: "#BCBCBC",
};

const r = 4.25;

const Screen = ({ data, arrayColumns, arrayRows }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 100 80"
    >
      <defs>
        <linearGradient id="linearGradient1582">
          <stop stopColor="#191919" stopOpacity="1" offset="0" id="stop1578" />
          <stop stopColor="#323232" stopOpacity="1" offset="1" id="stop1580" />
        </linearGradient>
        <radialGradient
          xlinkHref="#linearGradient1582"
          id="radialGradient1576"
          cx="75%"
          cy="75%"
          fx="75%"
          fy="75%"
          r="450%"
          gradientTransform="matrix(1.1182301,-0.00953598,0.00835003,0.97916037,-236.85132,-183.66633)"
          gradientUnits="userSpaceOnUse"
        />
        {/* ELLIPSE GRADIENT FOR LEDS */}
        <radialGradient
          id="radialGradient1078"
          cx="5%"
          cy="5%"
          fx="2%"
          fy="2%"
          r="4%"
        >
          <stop stopColor="#EAEAEA" stopOpacity="0" offset="1" />
          <stop stopColor="#EAEAEA" stopOpacity="0.18" offset="0" />
        </radialGradient>
      </defs>
      <rect
        y="1.5"
        x="1"
        rx="9"
        ry="9"
        width="98%"
        height="96%"
        fill="url(#radialGradient1576)"
        fillOpacity="1"
        stroke="#1b1b1b"
        strokeWidth="3"
      />
      <>
        {Object.values(data).map((vals, i) => {
          // 3 or 6 keys
          return (
            <React.Fragment key={`frag_${i}`}>
              {vals.map((bit, j) => {
                // 4 or 7 elements
                return (
                  <LedTwo
                    key={`led_${i}${j}`}
                    colour={bit === 1 ? colours["green"] : colours["grey"]}
                    x={arrayRows[i]}
                    y={arrayColumns[j]}
                    r={r}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </>
    </svg>
  );
};

export default Screen;
