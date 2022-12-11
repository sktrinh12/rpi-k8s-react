import React from "react";

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  );
};

const startCx = 75;
const numberOfCircles = range(1, 49, 1);
// console.log(numberOfCircles);

const Clock = () => {
  return (
    <svg
      height="675"
      width="675"
      viewBox="-90 -15 700 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="525"
        height="670"
        rx="15"
        ry="15"
        fill="pink"
        stroke="red"
        strokeWidth="4px"
      />
      {numberOfCircles.map((n, i) => {
        const cx = startCx * parseInt(i / 8) + startCx;
        const cy = ((i % 8) + 1) * startCx;
        // console.log(`${i}: cx=${cx}, cy=${cy}`);
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="25"
            fill="blue"
            stroke="black"
            strokeWidth="2px"
          />
        );
      })}
    </svg>
  );
};

export default Clock;
