import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentCalculation: "0",
  history: [
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
    "2*2",
  ],
  isHistoryHidden: false,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentCalculation: (state, action) => {
      state.currentCalculation = action.payload;
    },
    setHistory: (state, action) => {
      state.history = [...state.history, action.payload];
    },
    clearHistory: (state) => {
      state.history = [];
    },
    setIsHistoryHidden: (state) => {
      state.isHistoryHidden = !state.isHistoryHidden;
    },
  },
});

export const {
  setCurrentCalculation,
  setHistory,
  clearHistory,
  setIsHistoryHidden,
} = calculatorSlice.actions;
