import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProgressBarList from "./ProgressBarList/ProgressBarList";
import ProgressBar from "./ProgressBar/ProgressBar";

const mockChildComponent = jest.fn();
jest.mock("./ProgressBar/ProgressBar", () => () => {
  mockChildComponent();
  return <mock-ProgressBar />;
});

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
    // Find and select the progressBarTwo option
    screen.getByRole("option", { name: "progressBarTwo" })
  );
  expect(screen.getByRole("option", { name: "progressBarTwo" }).selected).toBe(
    true
  );
});

test("should allow user to click  button and call child component", () => {
  render(<ProgressBarList />);
  render(<ProgressBar/>);
  userEvent.selectOptions(
    // Find the select element
    screen.getByRole("progressBarItems"),
    // Find and select the progressBarTwo option
    screen.getByRole("option", { name: "progressBarTwo" })
  );
  userEvent.click(screen.getByRole("button", { name: "10" }));
  expect(mockChildComponent).toHaveBeenCalled();
});

