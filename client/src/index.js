import React from "react";
import ReactDOM from "react-dom";
import "primitive-ui/dist/css/main.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
