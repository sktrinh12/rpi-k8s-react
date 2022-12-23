import React from "react";

const Led = ({ colour, x, y, r }) => {
  return (
    <>
      <circle
        r={r}
        cy={`${y}%`}
        cx={`${x}%`}
        fill={colour}
        fillOpacity="1"
        strokeWidth="0.5"
        strokeOpacity="1"
        stroke="#5b5b5b"
      />
      <circle
        r={r * 0.92}
        cy={`${y}%`}
        cx={`${x}%`}
        fill="none"
        fillOpacity="0"
        strokeWidth="0.07"
        strokeOpacity="0.85"
        stroke="#f3f6f4"
      />
      <ellipse
        ry="1.05"
        rx="1.15"
        cy={`${y - 2}%`}
        cx={`${x - 1.25}%`}
        fill="url(#radialGradient1078)"
        fillOpacity="1"
        strokeWidth="0"
      />
    </>
  );
};

export default Led;
