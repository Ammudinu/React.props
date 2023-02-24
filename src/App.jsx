import React from "react";
import Grandparent from "./Grandparent";
import "./global.css";

const App = () => {
  return (
    <div className="rootcomponent">
      <strong>ROOT</strong>
      <Grandparent data="Rajini" />
    </div>
  );
};

export default App;
