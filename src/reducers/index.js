import { combineReducers } from "redux";
import userReducer from "./userReducer";
import testReducer from "./testReducer";

export default combineReducers({ user: userReducer,test:testReducer });
