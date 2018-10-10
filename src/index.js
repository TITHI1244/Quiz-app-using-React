import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./Components/App";
// import DataFromApi from "./Components/DataFromApi";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
