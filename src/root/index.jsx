import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../containers/App";
import store from "../redux/store";
import { ViewportProvider } from "../hooks/use-window-size";

export default () => (
  <Provider store={store}>
    <ViewportProvider>
      <Router>
        <App />
      </Router>
    </ViewportProvider>
  </Provider>
);
