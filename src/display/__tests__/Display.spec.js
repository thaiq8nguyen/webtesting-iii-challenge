import React from "react";
import { cleanup, render } from "@testing-library/react";
import Display from "../Display";

afterEach(cleanup);

/* SNAPSHOT TESTING */
test("creating controller state snapshot using snapshot testing", () => {
  const { asFragment } = render(<Display />);
  expect(asFragment()).toMatchSnapshot();
});

test("display lock status and close state when locked=false and closed=false", () => {
  const { getByText } = render(<Display locked={false} closed={false} />);

  const lockStatusSign = getByText("Unlocked");
  const closeStatusSign = getByText("Open");

  expect(lockStatusSign.classList.contains("green-led")).toBeTruthy();
  expect(closeStatusSign.classList.contains("green-led")).toBeTruthy();
});

test("display lock status and close state when locked=false and closed=true", () => {
  const { getByText } = render(<Display locked={false} closed={true} />);

  const lockStatusSign = getByText("Unlocked");
  const closeStatusSign = getByText("Closed");

  expect(lockStatusSign.classList.contains("green-led")).toBeTruthy();
  expect(closeStatusSign.classList.contains("red-led")).toBeTruthy();
  //console.log(closeStatusSign.classList);
});
