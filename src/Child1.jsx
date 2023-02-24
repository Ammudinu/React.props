import React from "react";

const Child1 = (props) => {
  return (
    <div className="Child1">
      <strong>child1</strong>
      <h4 style={{ float: "right" }}>{props.data}</h4>
    </div>
  );
};

export default Child1;
