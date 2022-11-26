import React from "react";

const LCDdisplay = ({
  className,
  stringTop,
  stringBottom,
  onClick,
  onStringBottom,
}) => {
  const stringTopLength = stringTop.length === 0 ? 1 : stringTop.length;
  const stringBottomLength =
    stringBottom.length === 0 ? 1 : stringBottom.length;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 60 27"
      // viewBox="-10 -10 80 50"
      width="400"
      id="svg15051"
      onClick={onClick}
    >
      <defs id="defs409" />

      <g id="layer1" transform="translate(-7.0417535,-75.613128)">
        <g
          id="g14607"
          transform="matrix(0.26458333,0,0,0.26458333,-8.5747484,2.236762)"
        >
          <g id="g14573">
            <path
              d="M 59.023,277.328 V 379.375 H 285.794 V 277.328 Z m 113.03,2.081 c 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.621,1.388 -1.387,1.388 -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.621,-1.387 1.387,-1.387 z m -71.999,0 c 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.621,1.388 -1.387,1.388 -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.622,-1.387 1.387,-1.387 z m -7.2,0 c 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.621,1.388 -1.387,1.388 -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.62,-1.387 1.387,-1.387 z m -27.289,1.655 c 1.576,0 2.854,1.274 2.854,2.854 0,1.58 -1.278,2.854 -2.854,2.854 -1.576,0 -2.854,-1.275 -2.854,-2.854 0,-1.579 1.279,-2.854 2.854,-2.854 z m 0.003,94.603 c -1.576,0 -2.854,-1.278 -2.854,-2.854 0,-1.576 1.278,-2.854 2.854,-2.854 1.576,0 2.854,1.277 2.854,2.854 0,1.578 -1.278,2.854 -2.854,2.854 z m 12.886,-93.484 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.622,1.388 -1.387,1.388 z m 5.813,-1.387 c 0,-0.767 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.621,1.388 -1.387,1.388 -0.766,0 -1.387,-0.623 -1.387,-1.388 z m 17.976,86.372 H 85.91 v -4.816 h 16.333 z m 0,-72.816 H 85.91 v -4.814 h 16.333 z m 5.009,-12.169 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.62,1.388 -1.387,1.388 z m 7.202,0 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.622,1.388 -1.387,1.388 z m 7.199,0.001 c -0.766,0 -1.387,-0.623 -1.387,-1.389 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.621,1.389 -1.387,1.389 z m 7.201,-0.001 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.621,1.388 -1.387,1.388 z m 7.199,0 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.622,1.388 -1.387,1.388 z m 7.199,0 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.62,1.388 -1.387,1.388 z m 7.201,0 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.387,0.621 1.387,1.387 0,0.766 -0.621,1.388 -1.387,1.388 z m 7.199,0 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.388,0.621 1.388,1.387 0,0.766 -0.62,1.388 -1.388,1.388 z m 5.814,-1.387 c 0,-0.767 0.62,-1.387 1.388,-1.387 0.768,0 1.389,0.62 1.389,1.387 0,0.767 -0.621,1.388 -1.389,1.388 -0.768,0 -1.388,-0.623 -1.388,-1.388 z m 17.11,86.372 h -16.334 v -4.816 h 16.334 z m 0,-72.816 h -16.334 v -4.814 h 16.334 z m -1.324,-12.169 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.388,0.621 1.388,1.387 0,0.766 -0.62,1.388 -1.388,1.388 z m 7.201,0 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.387,0.621 1.387,1.387 0,0.766 -0.619,1.388 -1.387,1.388 z m 72.455,84.985 h -16.332 v -4.816 h 16.332 z m 0,-72.816 h -16.332 v -4.814 h 16.332 z m 20.322,-13.293 c 1.576,0 2.854,1.277 2.854,2.854 0,1.577 -1.275,2.854 -2.854,2.854 -1.576,0 -2.854,-1.277 -2.854,-2.854 0,-1.577 1.278,-2.854 2.854,-2.854 z m 10e-4,94.609 c -1.574,0 -2.854,-1.277 -2.854,-2.854 0,-1.578 1.279,-2.854 2.854,-2.854 1.578,0 2.854,1.278 2.854,2.854 0,1.576 -1.273,2.854 -2.854,2.854 z"
              id="path14391"
              fill="#1f7a34"
            />
            <g id="g14399" fill="#9a916c">
              <path
                d="m 60.604,283.918 c 0,2.736 2.223,4.961 4.96,4.961 2.742,0 4.961,-2.225 4.961,-4.961 0,-2.74 -2.219,-4.96 -4.961,-4.96 -2.736,0 -4.96,2.22 -4.96,4.96 z m 2.107,0 c 0,-1.576 1.278,-2.854 2.854,-2.854 1.576,0 2.854,1.274 2.854,2.854 0,1.58 -1.278,2.854 -2.854,2.854 -1.575,-10e-4 -2.854,-1.278 -2.854,-2.854 z"
                id="path14393"
              />
              <path
                d="m 284.191,372.814 c 0,-2.737 -2.225,-4.961 -4.961,-4.961 -2.742,0 -4.961,2.224 -4.961,4.961 0,2.74 2.219,4.959 4.961,4.959 2.741,0 4.961,-2.216 4.961,-4.959 z m -2.105,0 c 0,1.576 -1.278,2.854 -2.854,2.854 -1.575,0 -2.854,-1.277 -2.854,-2.854 0,-1.578 1.276,-2.854 2.854,-2.854 1.576,0 2.854,1.278 2.854,2.854 z"
                id="path14395"
              />
              <path
                d="m 60.607,372.813 c 0,2.737 2.223,4.961 4.96,4.961 2.742,0 4.961,-2.224 4.961,-4.961 0,-2.74 -2.219,-4.959 -4.961,-4.959 -2.736,0 -4.96,2.218 -4.96,4.959 z m 2.107,0 c 0,-1.576 1.278,-2.854 2.854,-2.854 1.576,0 2.854,1.277 2.854,2.854 0,1.578 -1.278,2.854 -2.854,2.854 -1.575,0 -2.854,-1.278 -2.854,-2.854 z"
                id="path14397"
              />
            </g>
            <path
              d="m 276.586,342.6 c -0.732,0 -1.336,-0.602 -1.336,-1.336 v -25.822 c 0,-0.733 0.604,-1.338 1.336,-1.338 h 0.057 v -20.748 h -0.697 l -2.051,-2.049 v -0.711 H 70.922 v 0.711 l -2.048,2.049 h -0.699 v 20.748 h 0.057 c 0.735,0 1.337,0.604 1.337,1.338 v 25.822 c 0,0.734 -0.604,1.336 -1.337,1.336 h -0.057 v 20.748 h 0.701 l 2.049,2.049 v 0.715 h 202.973 v -0.715 l 2.051,-2.049 h 0.696 V 342.6 Z"
              id="path14401"
              fill="#303030"
            />
            <g id="g14409">
              <path
                d="m 267.684,348.71 c 0,2.206 -1.805,4.011 -4.012,4.011 H 81.144 c -2.206,0 -4.011,-1.805 -4.011,-4.011 v -40.717 c 0,-2.206 1.805,-4.011 4.011,-4.011 h 182.527 c 2.207,0 4.013,1.805 4.013,4.011 z"
                id="path14403"
                fill="#87ad34"
              />
            </g>
            <g id="g14415">
              <path
                d="m 269.38,295.945 c 0,-0.734 -0.601,-1.336 -1.335,-1.336 H 76.773 c -0.735,0 -1.336,0.603 -1.336,1.336 v 0.738 c 0,0.732 0.602,1.336 1.336,1.336 h 191.271 c 0.733,0 1.336,-0.604 1.336,-1.336 z"
                id="path14411"
                fill="#1a1a1a"
              />
              <path
                d="m 268.713,297.141 c 0,-0.484 -0.432,-0.881 -0.957,-0.881 H 77.141 c -0.526,0 -0.957,0.396 -0.957,0.881 0,0.483 0.431,0.879 0.957,0.879 h 190.615 c 0.525,0 0.957,-0.397 0.957,-0.879 z"
                id="path14413"
                fill="#424242"
              />
            </g>
            <g id="g14421">
              <path
                d="m 269.38,359.384 c 0,-0.733 -0.601,-1.336 -1.335,-1.336 H 76.773 c -0.735,0 -1.336,0.603 -1.336,1.336 v 0.738 c 0,0.733 0.602,1.336 1.336,1.336 h 191.271 c 0.733,0 1.336,-0.603 1.336,-1.336 z"
                id="path14417"
                fill="#1a1a1a"
              />
              <path
                d="m 268.713,360.579 c 0,-0.483 -0.432,-0.88 -0.957,-0.88 H 77.141 c -0.526,0 -0.957,0.396 -0.957,0.88 0,0.484 0.431,0.879 0.957,0.879 h 190.615 c 0.525,0 0.957,-0.395 0.957,-0.879 z"
                id="path14419"
                fill="#424242"
              />
            </g>
            <g id="g14437" fill="none">
              <g
                id="g14427"
                stroke="#f2f2f2"
                strokeWidth="0.2358"
                strokeLinecap="round"
                strokeOpacity="0.2"
              >
                <path d="m 68.96,293.501 2.114,-2.112" id="path14423" />
                <path d="m 71.096,365.305 -2.114,-2.113" id="path14425" />
              </g>
              <g
                id="g14433"
                stroke="#f2f2f2"
                strokeWidth="0.2358"
                strokeLinecap="round"
                strokeOpacity="0.2"
              >
                <path d="m 275.848,293.501 -2.115,-2.112" id="path14429" />
                <path d="m 273.711,365.305 2.113,-2.113" id="path14431" />
              </g>
              <path
                d="m 267.684,348.71 c 0,2.205 -1.807,4.011 -4.012,4.011 H 81.144 c -2.205,0 -4.011,-1.806 -4.011,-4.011 v -40.717 c 0,-2.205 1.806,-4.011 4.011,-4.011 h 182.527 c 2.205,0 4.013,1.806 4.013,4.011 z"
                id="path14435"
                stroke="#1a1a1a"
                strokeWidth="1.41499996"
                strokeOpacity="0"
              />
            </g>
            <g id="g14473" fill="#9a916c">
              <path
                d="m 274.271,283.913 c 0,2.737 2.224,4.961 4.961,4.961 2.742,0 4.961,-2.224 4.961,-4.961 0,-2.741 -2.219,-4.96 -4.961,-4.96 -2.74,0 -4.961,2.219 -4.961,4.96 z m 2.105,0 c 0,-1.576 1.278,-2.854 2.854,-2.854 1.576,0 2.854,1.277 2.854,2.854 0,1.577 -1.275,2.854 -2.854,2.854 -1.576,10e-4 -2.854,-1.279 -2.854,-2.854 z"
                id="path14439"
              />
              <path
                d="m 76.043,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.411,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.622,1.388 -1.387,1.388 z"
                id="path14441"
              />
              <path
                d="m 83.244,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.409,4.856 c -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.621,1.388 -1.387,1.388 z"
                id="path14443"
              />
              <path
                d="m 90.443,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.411,4.856 c -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.621,1.388 -1.387,1.388 z"
                id="path14445"
              />
              <path
                d="m 97.644,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.41,4.856 c -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.622,1.388 -1.387,1.388 z"
                id="path14447"
              />
              <path
                d="m 104.842,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.41,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.62,1.388 -1.387,1.388 z"
                id="path14449"
              />
              <path
                d="m 112.043,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.411,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.622,1.388 -1.387,1.388 z"
                id="path14451"
              />
              <path
                d="m 119.244,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.409,4.856 c -0.766,0 -1.387,-0.623 -1.387,-1.389 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.621,1.389 -1.387,1.389 z"
                id="path14453"
              />
              <path
                d="m 126.443,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.411,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.621,1.388 -1.387,1.388 z"
                id="path14455"
              />
              <path
                d="m 133.643,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.41,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.622,1.388 -1.387,1.388 z"
                id="path14457"
              />
              <path
                d="m 140.843,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.409,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.621 1.387,1.387 0,0.766 -0.62,1.388 -1.387,1.388 z"
                id="path14459"
              />
              <path
                d="m 148.043,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.41,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.387,0.621 1.387,1.387 0,0.766 -0.621,1.388 -1.387,1.388 z"
                id="path14461"
              />
              <path
                d="m 155.244,277.328 v 4.75 c 0,1.33 1.076,2.41 2.408,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.408,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.388,0.621 1.388,1.387 0,0.766 -0.62,1.388 -1.388,1.388 z"
                id="path14463"
              />
              <path
                d="m 162.441,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.413,4.856 c -0.768,0 -1.388,-0.621 -1.388,-1.388 0,-0.767 0.62,-1.387 1.388,-1.387 0.768,0 1.389,0.62 1.389,1.387 0,0.767 -0.624,1.388 -1.389,1.388 z"
                id="path14465"
              />
              <path
                d="m 169.643,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.41,4.856 c -0.766,0 -1.387,-0.621 -1.387,-1.388 0,-0.767 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.62 1.387,1.387 0,0.767 -0.622,1.388 -1.387,1.388 z"
                id="path14467"
              />
              <path
                d="m 176.843,277.328 v 4.75 c 0,1.33 1.077,2.41 2.409,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.409,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.388,0.621 1.388,1.387 0,0.766 -0.62,1.388 -1.388,1.388 z"
                id="path14469"
              />
              <path
                d="m 184.043,277.328 v 4.75 c 0,1.33 1.078,2.41 2.41,2.41 1.33,0 2.41,-1.08 2.41,-2.41 v -4.75 z m 2.41,4.855 c -0.766,0 -1.387,-0.622 -1.387,-1.388 0,-0.766 0.621,-1.387 1.387,-1.387 0.768,0 1.387,0.621 1.387,1.387 0,0.766 -0.619,1.388 -1.387,1.388 z"
                id="path14471"
              />
            </g>
            <g id="g14539" fill="#1a1a1a" fillOpacity="0.2">
              {/* the cursor */}
              {onStringBottom && (
                <text
                  fontSize="22"
                  textAnchor="start"
                  transform="translate(5.5, 15.5)"
                  className="text-cursor"
                >
                  <textPath
                    href={`#path${14475 + 2 * (stringBottomLength - 1)}`}
                  >
                    |
                  </textPath>
                </text>
              )}
              <path
                d="M 86.813,328.697 H 96.84 V 345.22 H 86.813 Z"
                id="path14475"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14475">{stringBottom[0] || ""}</textPath>
              </text>
              <path
                d="m 97.558,328.697 h 10.027 V 345.22 H 97.558 Z"
                id="path14477"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14477">{stringBottom[1] || ""}</textPath>
              </text>
              <path
                d="m 108.302,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14479"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14479">{stringBottom[2] || ""}</textPath>
              </text>
              <path
                d="m 119.045,328.697 h 10.028 v 16.523 h -10.028 z"
                id="path14481"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14481">{stringBottom[3] || ""}</textPath>
              </text>
              <path
                d="m 129.792,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14483"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14483">{stringBottom[4] || ""}</textPath>
              </text>
              <path
                d="m 140.536,328.697 h 10.026 v 16.523 h -10.026 z"
                id="path14485"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14485">{stringBottom[5] || ""}</textPath>
              </text>
              <path
                d="m 151.279,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14487"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14487">{stringBottom[6] || ""}</textPath>
              </text>
              <path
                d="m 162.023,328.697 h 10.025 v 16.523 h -10.025 z"
                id="path14489"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14489">{stringBottom[7] || ""}</textPath>
              </text>
              <path
                d="m 172.768,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14491"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14491">{stringBottom[8] || ""}</textPath>
              </text>
              <path
                d="m 183.514,328.697 h 10.025 v 16.523 h -10.025 z"
                id="path14493"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.5, 13.75)"
              >
                <textPath href="#path14493">{stringBottom[9] || ""}</textPath>
              </text>
              <path
                d="m 194.256,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14495"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14495">{stringBottom[10] || ""}</textPath>
              </text>
              <path
                d="m 205,328.697 h 10.027 V 345.22 H 205 Z"
                id="path14497"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14497">{stringBottom[11] || ""}</textPath>
              </text>
              <path
                d="m 215.744,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14499"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14499">{stringBottom[12] || ""}</textPath>
              </text>
              <path
                d="m 226.488,328.697 h 10.027 v 16.523 h -10.027 z"
                id="path14501"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14501">{stringBottom[13] || ""}</textPath>
              </text>
              <path
                d="m 237.232,328.697 h 10.025 v 16.523 h -10.025 z"
                id="path14503"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14503">{stringBottom[14] || ""}</textPath>
              </text>
              <path
                d="m 247.979,328.697 h 10.025 v 16.523 h -10.025 z"
                id="path14505"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14505">{stringBottom[15] || ""}</textPath>
              </text>
              {/* end of bottom row (right)*/}
              {!onStringBottom && (
                <text
                  fontSize="22"
                  textAnchor="start"
                  transform="translate(5.5, 15.5)"
                  className="text-cursor"
                >
                  <textPath href={`#path${14507 + 2 * (stringTopLength - 1)}`}>
                    |
                  </textPath>
                </text>
              )}
              <path
                d="M 86.813,311.482 H 96.84 v 16.521 H 86.813 Z"
                id="path14507"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14507">{stringTop[0] || ""}</textPath>
              </text>
              <path
                d="m 97.558,311.482 h 10.027 v 16.521 H 97.558 Z"
                id="path14509"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14509">{stringTop[1] || ""}</textPath>
              </text>
              <path
                d="m 108.302,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14511"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14511">{stringTop[2] || ""}</textPath>
              </text>
              <path
                d="m 119.045,311.482 h 10.028 v 16.521 h -10.028 z"
                id="path14513"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14513">{stringTop[3] || ""}</textPath>
              </text>
              <path
                d="m 129.792,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14515"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14515">{stringTop[4] || ""}</textPath>
              </text>
              <path
                d="m 140.536,311.482 h 10.026 v 16.521 h -10.026 z"
                id="path14517"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14517">{stringTop[5] || ""}</textPath>
              </text>
              <path
                d="m 151.279,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14519"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14519">{stringTop[6] || ""}</textPath>
              </text>
              <path
                d="m 162.023,311.482 h 10.025 v 16.521 h -10.025 z"
                id="path14521"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14521">{stringTop[7] || ""}</textPath>
              </text>
              <path
                d="m 172.768,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14523"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14523">{stringTop[8] || ""}</textPath>
              </text>
              <path
                d="m 183.514,311.482 h 10.025 v 16.521 h -10.025 z"
                id="path14525"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14525">{stringTop[9] || ""}</textPath>
              </text>
              <path
                d="m 194.256,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14527"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14527">{stringTop[10] || ""}</textPath>
              </text>
              <path
                d="m 205,311.482 h 10.027 v 16.521 H 205 Z"
                id="path14529"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14529">{stringTop[11] || ""}</textPath>
              </text>
              <path
                d="m 215.744,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14531"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14531">{stringTop[12] || ""}</textPath>
              </text>
              <path
                d="m 226.488,311.482 h 10.027 v 16.521 h -10.027 z"
                id="path14533"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14533">{stringTop[13] || ""}</textPath>
              </text>
              <path
                d="m 237.232,311.482 h 10.025 v 16.521 h -10.025 z"
                id="path14535"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14535">{stringTop[14] || ""}</textPath>
              </text>
              <path
                d="m 247.979,311.482 h 10.025 v 16.521 h -10.025 z"
                id="path14537"
              />
              <text
                fontSize="18"
                textAnchor="start"
                transform="translate(1.75, 13.75)"
              >
                <textPath href="#path14537">{stringTop[15] || ""}</textPath>
              </text>
            </g>
            <g id="g14545" fill="#606060">
              <path
                d="m 68.478,342.551 v 20.797 h 0.27 v -20.852 c -0.085,0.035 -0.182,0.037 -0.27,0.055 z"
                id="path14541"
              />
              <path
                d="m 68.746,314.209 v -20.854 h -0.268 v 20.799 c 0.09,0.018 0.185,0.02 0.268,0.055 z"
                id="path14543"
              />
            </g>
            <path
              d="m 70.922,290.901 h 202.973 v 0.266 H 70.922 Z"
              id="path14547"
              fill="#606060"
            />
            <path
              d="m 70.922,290.596 h 202.973 v 0.306 H 70.922 Z"
              id="path14549"
              fill="#212121"
            />
            <g id="g14555" fill="#212121">
              <path
                d="m 68.231,314.104 c 0.087,0 0.164,0.035 0.247,0.051 v -20.799 h -0.303 v 20.748 z"
                id="path14551"
              />
              <path
                d="m 68.231,342.6 h -0.057 v 20.748 h 0.303 v -20.797 c -0.081,0.015 -0.159,0.049 -0.246,0.049 z"
                id="path14553"
              />
            </g>
            <path
              d="m 70.924,365.811 h 202.973 v 0.301 H 70.924 Z"
              id="path14557"
              fill="#212121"
            />
            <path
              d="m 70.924,365.543 h 202.973 v 0.268 H 70.924 Z"
              id="path14559"
              fill="#606060"
            />
            <g id="g14565" fill="#212121">
              <path
                d="m 276.586,342.6 c -0.088,0 -0.165,-0.033 -0.249,-0.051 v 20.799 h 0.307 V 342.6 Z"
                id="path14561"
              />
              <path
                d="m 276.586,314.104 h 0.057 v -20.748 h -0.306 v 20.799 c 0.084,-0.016 0.161,-0.051 0.249,-0.051 z"
                id="path14563"
              />
            </g>
            <g id="g14571" fill="#606060">
              <path
                d="m 276.072,342.496 v 20.852 h 0.265 v -20.799 c -0.088,-0.016 -0.183,-0.018 -0.265,-0.053 z"
                id="path14567"
              />
              <path
                d="m 276.337,314.154 v -20.799 h -0.265 v 20.854 c 0.082,-0.035 0.177,-0.037 0.265,-0.055 z"
                id="path14569"
              />
            </g>
          </g>

          <circle cx="78.454002" cy="280.79501" r="1.387" id="circle14575" />
          <circle cx="85.653" cy="280.79599" r="1.387" id="circle14577" />
          <circle cx="92.853996" cy="280.79599" r="1.387" id="circle14579" />
          <circle cx="100.054" cy="280.79599" r="1.387" id="circle14581" />
          <circle cx="107.252" cy="280.79501" r="1.387" id="circle14583" />
          <circle cx="114.454" cy="280.79501" r="1.387" id="circle14585" />
          <path
            d="m 120.267,280.795 c 0,-0.768 0.621,-1.387 1.387,-1.387 0.766,0 1.387,0.619 1.387,1.387 0,0.768 -0.621,1.389 -1.387,1.389 -0.766,0 -1.387,-0.623 -1.387,-1.389 z"
            id="path14587"
          />
          <circle cx="128.854" cy="280.79501" r="1.387" id="circle14589" />
          <circle cx="136.05299" cy="280.79501" r="1.387" id="circle14591" />
          <circle cx="143.252" cy="280.79501" r="1.387" id="circle14593" />
          <circle cx="150.453" cy="280.79501" r="1.387" id="circle14595" />
          <circle cx="157.65199" cy="280.79501" r="1.387" id="circle14597" />
          <circle cx="164.854" cy="280.79599" r="1.387" id="circle14599" />
          <circle cx="172.05299" cy="280.79599" r="1.387" id="circle14601" />
          <circle cx="179.252" cy="280.79501" r="1.387" id="circle14603" />
          <circle cx="186.453" cy="280.79501" r="1.387" id="circle14605" />
        </g>
      </g>
    </svg>
  );
};

export default LCDdisplay;
