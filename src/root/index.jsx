import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../containers/App";
import store from "../redux/store";

export default () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
