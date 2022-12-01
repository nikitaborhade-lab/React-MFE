import React from "react";
import ReactDOM from "react-dom";
import Test from "Test/Test"

import "./index.css";

const App = () => (
  <div className="container">
    <h4>Hello World! (port 8081)</h4>
    <Test/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
