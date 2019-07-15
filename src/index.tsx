import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { Route, BrowserRouter as Router } from "react-router-dom";

import rootReducer from "./modules";
import App from "./components/App";
import Home from "./components/Home";

const store = createStore(rootReducer, applyMiddleware());

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
