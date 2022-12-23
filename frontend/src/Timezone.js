import React from "react";

const Timezone = ({ searchTimeZone, timeZones, tzone }) => {
  return (
    <>
      <label htmlFor="timezones">Time Zones</label>&nbsp;&nbsp;
      <input list="timezones" onChange={searchTimeZone} placeholder={tzone} />
      <datalist id="timezones" name="timezones">
        {" "}
        {timeZones.map((tz) => {
          return <option key={tz} value={tz} />;
        })}
      </datalist>
    </>
  );
};

export default Timezone;
