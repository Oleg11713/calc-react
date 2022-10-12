import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  theme: "light",
};

export const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
