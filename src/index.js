import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App"
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(<App />,document.querySelector("#root"));
serviceWorker.unregister();
