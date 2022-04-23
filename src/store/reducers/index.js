import { combineReducers } from "@reduxjs/toolkit";
import mountainDataReducer from "./mountain-data";

const rootReducer = combineReducers({
  mountains: mountainDataReducer,
});

export default rootReducer;
