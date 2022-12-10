import React from "react";

const Timesegment = ({ fillColours }) => {
  return (
    <svg height="700" width="500">
      <rect
        width="400"
        height="650"
        rx="5"
        ry="5"
        fill={fillColours[0]}
        stroke="red"
        strokeWidth="4px"
      />

      <text textAnchor="middle" fontSize="80" x="110" y="80">
        H
      </text>
      <g transform="translate(200, 0)">
        <text textAnchor="middle" fontSize="80" x="110" y="80">
          H
        </text>
      </g>

      <circle
        cx="300"
        cy="200"
        r="50"
        fill={fillColours[1]}
        stroke="black"
        strokeWidth="2px"
      />
      <svg y="120">
        <circle
          cx="300"
          cy="200"
          r="50"
          fill={fillColours[2]}
          stroke="black"
          strokeWidth="2px"
        />
        <svg y="120">
          <circle
            cx="300"
            cy="200"
            r="50"
            fill={fillColours[3]}
            stroke="black"
            strokeWidth="2px"
          />
          <svg x="10">
            <circle
              cx="100"
              cy="200"
              r="50"
              fill={fillColours[4]}
              stroke="black"
              strokeWidth="2px"
            />
            <svg y="120">
              <circle
                cx="100"
                cy="200"
                r="50"
                fill={fillColours[5]}
                stroke="black"
                strokeWidth="2px"
              />
            </svg>
          </svg>

          <svg y="120">
            <circle
              cx="300"
              cy="200"
              r="50"
              fill={fillColours[6]}
              stroke="black"
              strokeWidth="2px"
            />
          </svg>
        </svg>
      </svg>
    </svg>
  );
};

export default Timesegment;
