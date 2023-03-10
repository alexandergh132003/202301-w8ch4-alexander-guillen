import { CalculatorState } from "../../types";
import {
  addDigitActionCreator,
  calculatorReducer,
  deleteDigitsActionCreator,
  setPreviousNumActionCreator,
} from "./calculatorSlice";

describe("Given a calculatorReducer", () => {
  describe("When it receives an addDigit action wich is called with digit '4' and a initialState with currentNum 1", () => {
    test("Then it should return a new state with currentNum equal to 14", () => {
      const initialState: CalculatorState = {
        currentNum: 1,
        previousNum: 0,
        result: 0,
      };
      const addDigitAction = addDigitActionCreator("4");

      const { currentNum } = calculatorReducer(initialState, addDigitAction);

      expect(currentNum).toBe(14);
    });
  });

  describe("When it receives a deleteDigits action and a initialState with currentNum 14", () => {
    test("Then it should return a new state with currentNum equal to 0", () => {
      const initialState: CalculatorState = {
        currentNum: 14,
        previousNum: 0,
        result: 0,
      };

      const deleteDigitsAction = deleteDigitsActionCreator();

      const { currentNum } = calculatorReducer(
        initialState,
        deleteDigitsAction
      );

      expect(currentNum).toBe(0);
    });
  });

  describe("When it receives a setPreviousNum action wich is called with previousNum 14 and a initialState with previousNum 0", () => {
    test("Then it should return a new state with previousNum equal to 14", () => {
      const initialState: CalculatorState = {
        currentNum: 0,
        previousNum: 0,
        result: 0,
      };
      const setPreviousNumAction = setPreviousNumActionCreator(14);

      const { previousNum } = calculatorReducer(
        initialState,
        setPreviousNumAction
      );

      expect(previousNum).toBe(14);
    });
  });
});
