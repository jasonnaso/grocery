import React from "react";

export const TextField = ({ value, handleChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};