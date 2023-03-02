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
    deleteDigits: (currentState) => ({
      ...currentState,
      currentNum: 0,
    }),
  },
});

export const {
  addDigit: addDigitActionCreator,
  deleteDigits: deleteDigitsActionCreator,
} = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
