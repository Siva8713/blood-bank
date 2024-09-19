import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your app with CssVarsProvider */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
