import React from "react";
import { cleanup, render } from "@testing-library/react";
import Dashboard from "../Dashboard";



afterEach(cleanup);

/* SNAPSHOT TESTING */
test("creating controller state snapshot using snapshot testing", () => {
    const { asFragment } = render(<Dashboard/>);
    expect(asFragment()).toMatchSnapshot();
})