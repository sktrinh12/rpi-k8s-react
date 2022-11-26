import React from "react";

const Input = ({ type, onKeyDown, onChange, value }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={value}
      maxLength="16"
      size="33"
    />
  );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
