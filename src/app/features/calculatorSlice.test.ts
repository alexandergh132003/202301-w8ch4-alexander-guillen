import { CalculatorState } from "../../types";
import { addDigitActionCreator, calculatorReducer } from "./calculatorSlice";

describe("Given a calculatorReducer", () => {
  describe("When it receives an addDigit action wich is called with digit '4' and a initialState with currentNum 1", () => {
    test("Then it should return a new state with currentNum equal to 14", () => {
      const initialState: CalculatorState = {
        currentNum: 1,
        previousNum: 0,
        result: 0,
      };
      const action = addDigitActionCreator("4");

      const newState = calculatorReducer(initialState, action);

      expect(newState.currentNum).toBe(14);
    });
  });
});
