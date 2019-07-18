import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules";

import apiMiddleware from "./api/apiMiddleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(apiMiddleware))
);

export default store;
