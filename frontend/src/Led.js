import React from "react";

const Led = ({ colours, radColourIds }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 6"
      version="1.1"
      height="100"
      width="100"
    >
      <defs>
        <radialGradient
          id={`radialGradient7003-${radColourIds}`}
          gradientUnits="userSpaceOnUse"
          cy="21.5"
          cx="47.5"
          r="2.5"
        >
          <stop stopColor={colours[1]} stopOpacity="0" offset="0" />
          <stop stopColor={colours[1]} stopOpacity=".49804" offset="0.82" />
          <stop stopColor={colours[2]} offset="1" />
        </radialGradient>
        <radialGradient
          id={`radialGradient6993-${radColourIds}`}
          gradientUnits="userSpaceOnUse"
          cy="21.5"
          cx="47.5"
          r="2.5"
        >
          <stop stopColor="#ffffff" offset="0" />
          <stop stopColor={colours[1]} stopOpacity="0" offset="1" />
        </radialGradient>
        <radialGradient // outer rim of led (black/grey)
          id={`radialGradient7039-${radColourIds}`}
          cx="-87.5"
          gradientUnits="userSpaceOnUse"
          cy="62.5"
          r="2.5"
        >
          <stop stopColor="#000000" offset="0" />
          <stop stopColor="#000000" offset=".50035" />
          <stop stopColor="#a6a6a6" offset=".76417" />
          <stop stopColor="#353535" offset=".90484" />
          <stop stopColor="#000000" offset="1" />
        </radialGradient>
      </defs>
      <g transform="translate(-437 -640.79)">
        <path
          rx="2.5"
          ry="2.5"
          fill={`url(#radialGradient7039-${radColourIds})`}
          type="arc"
          d="m-85 62.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5z"
          transform="matrix(1.2 0 0 1.2 545 568.79)"
          cy="62.5"
          cx="-87.5"
        />
        <path
          rx="2.5"
          ry="2.5"
          fill={colours[1]}
          type="arc"
          d="m50 21.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5c1.3807 0 2.5 1.1193 2.5 2.5z"
          transform="translate(392.5 622.29)"
          cy="21.5"
          cx="47.5"
        />
        <path
          rx="2.5"
          ry="2.5"
          fill={`url(#radialGradient6993-${radColourIds})`}
          type="arc"
          d="m50 21.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5c1.3807 0 2.5 1.1193 2.5 2.5z"
          transform="translate(392.9 621.89)"
          cy="21.5"
          cx="47.5"
        />
        <path
          rx="2.5"
          ry="2.5"
          fill={`url(#radialGradient7003-${radColourIds})`}
          type="arc"
          d="m50 21.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5c1.3807 0 2.5 1.1193 2.5 2.5z"
          transform="translate(392.5 622.29)"
          cy="21.5"
          cx="47.5"
        />
      </g>
    </svg>
  );
};

export default Led;
