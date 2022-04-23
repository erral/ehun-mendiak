import { combineReducers } from "@reduxjs/toolkit";
import mountainDataReducer from "./mountain-data";
import borderDataReducer from "./border-data";

const rootReducer = combineReducers({
  mountains: mountainDataReducer,
  border: borderDataReducer,
});

export default rootReducer;
