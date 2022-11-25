import React from "react";

const Title = ({ className, title }) => {
  return (
    <svg viewBox="0 0 1100 110" className={className}>
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="80%">
          {title}
        </text>
      </symbol>

      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg>
  );
};

export default Title;
