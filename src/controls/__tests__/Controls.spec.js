import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Controls from "../Controls";

afterEach(cleanup);

/* SNAPSHOT TESTING */
test("creating controller state snapshot using snapshot testing", () => {
  const { asFragment } = render(<Controls locked={false} closed={false} />);
  expect(asFragment()).toMatchSnapshot();
});

/* UNIT TESTING */
test("lock gate button state when the close gate button is clicked", () => {
  const { getByText } = render(<Controls locked={false} closed={false} />);

  const toggleLockGateButton = getByText("Lock Gate");
  const toggleCloseGateButton = getByText("Close Gate");

  expect(toggleLockGateButton.disabled).toBeTruthy();
  expect(toggleCloseGateButton.disabled).toBeFalsy();
});
