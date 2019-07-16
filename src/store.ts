import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";

import apiMiddleware from "./api/apiMiddleware";

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

export default store;
