import React from "react";
import Parent from "./Parent";

const Grandparent = (props) => {
  return (
    <div className="Grandparent">
      <strong>Grandparent</strong>
      <Parent data={props.data} />
    </div>
  );
};

export default Grandparent;
