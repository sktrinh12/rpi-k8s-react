import React from "react";
import Led from "./Led";

const colours = {
  blue: "#005dc3",
  red: "#b70000",
  green: "#6aa84f",
  grey: "#BCBCBC",
};

const r = 24;

const Screen = ({ data, arrayColumns, arrayRows }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      top="0"
      left="0"
      viewBox="0 0 642.18753 492.18747"
      version="1.1"
    >
      <defs id="defs4">
        <linearGradient id="linearGradient1582">
          <stop stopColor="#191919" stopOpacity="1" offset="0" id="stop1578" />
          <stop stopColor="#323232" stopOpacity="1" offset="1" id="stop1580" />
        </linearGradient>
        <linearGradient id="linearGradient1566">
          <stop stopColor="#000000" stopOpacity="1" offset="0" id="stop1562" />
          <stop stopColor="#64da64" stopOpacity="1" offset="1" id="stop1564" />
        </linearGradient>
        <linearGradient id="linearGradient1526">
          <stop stopColor="#000000" stopOpacity="1" offset="0" id="stop1522" />
          <stop stopColor="#000000" stopOpacity="0" offset="1" id="stop1524" />
        </linearGradient>
        <linearGradient id="linearGradient5185">
          <stop id="stop5183" offset="0" stopColor="#000000" stopOpacity="1" />
          <stop id="stop5181" offset="1" stopColor="#646464" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="linearGradient6546">
          <stop stopColor="#b3b3b3" stopOpacity="1" offset="0" id="stop6548" />
          <stop stopColor="#b3b3b3" stopOpacity="0" offset="1" id="stop6550" />
        </linearGradient>
        <linearGradient id="linearGradient4434">
          <stop stopColor="#999" stopOpacity="1" offset="0" id="stop4436" />
          <stop stopColor="#4d4d4d" stopOpacity="1" offset="1" id="stop4438" />
        </linearGradient>
        <linearGradient id="linearGradient4185">
          <stop stopColor="#999" stopOpacity="1" offset="0" id="stop4187" />
          <stop stopColor="#4d4d4d" stopOpacity="1" offset="1" id="stop4189" />
        </linearGradient>
        <linearGradient
          xlinkHref="#linearGradient4185"
          id="linearGradient4275"
          gradientUnits="userSpaceOnUse"
          x1="389.89578"
          y1="99.513603"
          x2="387.80273"
          y2="650.89453"
          gradientTransform="matrix(1.5357143,0,0,1.5357143,-545.86472,-337.10183)"
        />
        <linearGradient
          xlinkHref="#linearGradient4434"
          id="linearGradient4527"
          gradientUnits="userSpaceOnUse"
          x1="2016.7129"
          y1="635.93359"
          x2="2041.772"
          y2="-647.61511"
          gradientTransform="matrix(0.2274881,0,0,0.20672788,120.2955,238.63262)"
        />
        <linearGradient
          xlinkHref="#linearGradient6546"
          id="linearGradient4693"
          x1="138.72906"
          y1="-69.321526"
          x2="-388.43829"
          y2="746.21747"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#linearGradient6546"
          id="linearGradient5102"
          x1="637.80847"
          y1="70.635719"
          x2="1340.2836"
          y2="70.635719"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.62858549,0,0,0.62858549,-229.27522,153.52804)"
        />
        <linearGradient
          xlinkHref="#linearGradient5185"
          id="linearGradient5187"
          x1="487.55374"
          y1="-295.86581"
          x2="489.13162"
          y2="-295.44302"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-168.28123,549.25883)"
        />
        <radialGradient
          xlinkHref="#linearGradient5185"
          id="radialGradient1518"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.5240016,0,0,0.77513588,-168.25367,55.337654)"
          cx="321.09375"
          cy="246.09375"
          fx="321.09375"
          fy="246.09375"
          r="318.75"
        />
        <linearGradient
          xlinkHref="#linearGradient1526"
          id="linearGradient1528"
          x1="3.5531065"
          y1="417.21533"
          x2="597.48553"
          y2="74.308273"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#linearGradient1582"
          id="radialGradient1576"
          cx="493.56238"
          cy="441.31989"
          fx="493.56238"
          fy="441.31989"
          r="302.34375"
          gradientTransform="matrix(1.1182301,-0.00953598,0.00835003,0.97916037,-236.85132,-183.66633)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <g id="g1590">
        <rect
          y="23.437502"
          x="23.437502"
          height="445.3125"
          width="595.3125"
          id="rect5156"
          fill="#000000"
          fillOpacity="1"
          stroke="url(#linearGradient1528)"
          strokeWidth="46.87500381"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeDashoffset="5.625"
          paintOrder="normal"
        />
        <rect
          y="25.781252"
          x="25.781252"
          height="440.625"
          width="590.625"
          id="rect5156-3"
          fill="#000000"
          fillOpacity="1"
          stroke="url(#radialGradient1518)"
          strokeWidth="46.875"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeDashoffset="5.625"
          paintOrder="normal"
        />
        <g
          transform="matrix(0.18978667,0,0,0.18978667,833.26699,932.04491)"
          id="g4351"
        />
        <g
          id="g4863"
          transform="matrix(0.18978667,0,0,0.18978667,833.26699,932.04491)"
        />
        <rect
          y="16.406282"
          x="16.406252"
          height="459.37497"
          width="609.375"
          id="rect5199"
          fill="#323232"
          fillOpacity="1"
          stroke="none"
          strokeWidth="46.87500381"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeDashoffset="6"
          strokeOpacity="1"
          paintOrder="normal"
        />
        <rect
          fill="url(#radialGradient1576)"
          fillOpacity="1"
          stroke="none"
          strokeWidth="46.87500381"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeDasharray="none"
          strokeDashoffset="6"
          strokeOpacity="0"
          paintOrder="normal"
          id="rect5201"
          width="604.6875"
          height="454.68747"
          x="16.406252"
          y="16.406282"
        />
      </g>
      <>
        {Object.values(data).map((vals, i) => {
          return (
            <React.Fragment key={`frag_${i}`}>
              {vals.map((bit, j) => {
                return (
                  <Led
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
