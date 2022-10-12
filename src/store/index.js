// import { combineReducers, createStore } from "redux";

// import { appReducer } from "./reducers/appReducer";
import { calculatorSlice } from "./reducers/calculatorReducer";
import { appSlice } from "./reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   // app: appReducer,
//   app: appSlice.reducer,
//   calculator: calculatorReducer,
// });

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    calculator: calculatorSlice.reducer,
  },
});
