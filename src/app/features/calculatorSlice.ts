// Create a reducer with createSlice for a calculator
// that can add, subtract, multiply, and divide.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculatorState } from "../../types";

const calculatorInitialState: CalculatorState = {
  currentNum: 0,
  previousNum: 0,
  result: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: calculatorInitialState,
  reducers: {
    addDigit: (currentState, action: PayloadAction<string>) => ({
      ...currentState,
      currentNum: +`${currentState.currentNum}${action.payload}`,
    }),
  },
});

export const { addDigit: addDigitActionCreator } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
