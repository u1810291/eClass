import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./@fake-api";
import Root from "./root";
import * as serviceWorker from "./serviceWorker";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
