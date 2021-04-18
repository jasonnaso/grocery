import { React } from "react";

export const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input className="btn btn-outline-primary" type="submit" value="&#65291;" />
    </form>
  );
};
