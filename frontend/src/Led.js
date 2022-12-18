import React from "react";

const Led = ({ colour, x, y, r }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={x} y={y}>
      <defs id="defs1034">
        <linearGradient id="linearGradient2678">
          <stop stopColor="#4d4d4d" stopOpacity="1" offset="0" id="stop2674" />
          <stop stopColor="#4d4d4d" stopOpacity="0" offset="1" id="stop2676" />
        </linearGradient>
        <linearGradient id="linearGradient2668">
          <stop stopColor="#4b5054" stopOpacity="1" offset="0" id="stop2664" />
          <stop stopColor="#4b5054" stopOpacity="0" offset="1" id="stop2666" />
        </linearGradient>
        <linearGradient id="linearGradient2614">
          <stop stopColor="#333333" stopOpacity="1" offset="0" id="stop2612" />
        </linearGradient>
        <linearGradient id="linearGradient1076">
          <stop stopColor="#afd7ff" stopOpacity="1" offset="0" id="stop1072" />
          <stop stopColor="#afd7ff" stopOpacity="0" offset="1" id="stop1074" />
        </linearGradient>
        <radialGradient
          xlinkHref="#linearGradient1076"
          id="radialGradient1078"
          cx="121.08932"
          cy="131.7326"
          fx="121.08932"
          fy="131.7326"
          r="44"
          gradientTransform="matrix(1,0,0,0.98571434,0,1.8818877)"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#linearGradient2678"
          id="radialGradient2680"
          cx="136.4494"
          cy="152.99106"
          fx="136.4494"
          fy="152.99106"
          r={70 * (r / 10)}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.1403964,0.01504402,-0.01016477,2.121867,-290.50069,-173.68837)"
        />
      </defs>
      <g id="layer1" transform="translate(-65.521066,-82.062723)">
        <g id="g2685">
          <circle
            r={r}
            cy="118"
            cx="100"
            id="path1042"
            fill={colour}
            fillOpacity="1"
            stroke="url(#radialGradient2680)"
            strokeWidth={1.7 * (r / 10)}
            strokeMiterlimit="4"
            strokeDasharray="none"
            strokeOpacity="1"
          />
          <ellipse
            ry={3.8123 * (r / 10)}
            rx={4.012 * (r / 10)}
            cy={-(0.25 * r + 5.3 - 118)}
            cx="94.7"
            id="path1044"
            fill="url(#radialGradient1078)"
            fillOpacity="1"
            stroke="#000000"
            strokeWidth="0"
            strokeMiterlimit="4"
            strokeDasharray="none"
            strokeOpacity="1"
          />
        </g>
      </g>
    </svg>
  );
};

/*
dist formula : sqrt[(x2-x1)^2 + (y2-y1)^2]
x2 = 94.7
x1 = 100
y2 = -107 (when entering in r=30)
y1 = -118
d = 12.21

calc ratio => d/r = 12.21/30=0.407
solve back for y2 for new r's
y2 = 16.28+5.3-118 = -96.42
but must take the negative of the negative to have positive values within the xvg coordinate sys
turns out the 0.407 ratio is not perfect and lessened to 0.25 to get a static position for the shiny finish on the led light (ellipse x-y coordinates)
*/

export default Led;
