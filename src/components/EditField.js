import React, { useState } from "react";

export const EditField = ({
  editValue,
  handleEditChange,
  handleEditSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleEditSubmit}>
        <input type="text" value={editValue} onChange={handleEditChange} />
        <input className="btn btn-success" type="submit" value="ADD" />
      </form>
    </div>
  );
};
