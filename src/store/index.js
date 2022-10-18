import { calculatorSlice } from "./reducers/calculatorReducer";
import { appSlice } from "./reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    calculator: calculatorSlice.reducer,
  },
});
