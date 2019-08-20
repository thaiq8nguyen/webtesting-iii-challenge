import React from "react";
import { cleanup, render } from "@testing-library/react";
import Display from "../Display";



afterEach(cleanup);

/* SNAPSHOT TESTING */
test("creating controller state snapshot using snapshot testing", () => {
    const { asFragment } = render(<Display/>);
    expect(asFragment()).toMatchSnapshot();
})