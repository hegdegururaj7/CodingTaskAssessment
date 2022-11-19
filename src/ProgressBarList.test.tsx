import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProgressBarList from "./ProgressBarList/ProgressBarList";

test("should correctly set default option", () => {
  render(<ProgressBarList />);
  expect(screen.getByRole("option", { name: "progressBarOne" }).selected).toBe(
    true
  );
});

test("should allow user to change progressBarOptions", () => {
  render(<ProgressBarList />);
  userEvent.selectOptions(
    // Find the select element
    screen.getByRole("progressBarItems"),
    // Find and select the progressBarThree option
    screen.getByRole("option", { name: "progressBarThree" })
  );
  expect(screen.getByRole("option", { name: "progressBarThree" }).selected).toBe(
    false
  );
});
