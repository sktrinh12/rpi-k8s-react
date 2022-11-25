import React from "react";

const Input = ({ type, onKeyDown, onChange }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      onChange={onChange}
      maxLength="16"
      size="33"
    />
  );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
