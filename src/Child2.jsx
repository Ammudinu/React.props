import React from "react";

const Child2 = (props) => {
  return (
    <div className="Child2">
      <strong>child2</strong>
      <h4 style={{ float: "right" }}>{props.data}</h4>
    </div>
  );
};

export default Child2;
