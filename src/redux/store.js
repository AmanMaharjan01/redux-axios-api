import allReducer from "./rootReducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
