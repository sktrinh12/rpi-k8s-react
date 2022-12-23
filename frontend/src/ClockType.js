import React from "react";

const clockTypes = ["binary", "bcd"];

const ClockType = ({ handleClockDropdownChange, clockType }) => {
  return (
    <>
      <label htmlFor="clock">Clock</label>
      <select
        value={clockType}
        name="clock"
        onChange={handleClockDropdownChange}
      >
        {clockTypes.map((clk, i) => {
          return (
            <option key={i} value={clk}>
              {clk}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ClockType;
