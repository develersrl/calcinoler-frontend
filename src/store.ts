import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer, applyMiddleware());

export default store;
