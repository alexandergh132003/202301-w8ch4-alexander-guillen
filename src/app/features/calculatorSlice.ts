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
    setPreviousNum: (currentState, action: PayloadAction<number>) => ({
      ...currentState,
      previousNum: action.payload,
    }),
  },
});

export const {
  addDigit: addDigitActionCreator,
  deleteDigits: deleteDigitsActionCreator,
  setPreviousNum: setPreviousNumActionCreator,
} = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
