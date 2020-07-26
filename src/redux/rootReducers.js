import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
