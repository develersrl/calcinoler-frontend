import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { Route, BrowserRouter as Router } from "react-router-dom";

import store from "./store";

import "./_base.scss";

import App from "./components/App";
import Home from "./components/Home";

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
    </App>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);
