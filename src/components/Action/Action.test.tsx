import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it receives a text '1', an action and it renders", () => {
    test("Then it should display a button with the text '1'", () => {
      const text = "1";
      const action = jest.fn();

      render(<Action text={text} action={action} />);
      const key = screen.getByRole("button", { name: text });

      expect(key).toBeInTheDocument();
    });
  });
});
