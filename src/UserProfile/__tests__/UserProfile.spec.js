import React from "react";
import { cleanup, render, waitForElement } from "@testing-library/react";
import "jest-dom/extend-expect";
import axiosMock from "axios";
import UserProfile from "../UserProfile";

afterEach(cleanup);

it("pulled and displayed data", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { user: "thaiq8nguyenx" } });

  const url = "/user";

  const { getByTestId } = render(<UserProfile url={url} />);

  const resolvedProfile = await waitForElement(() => getByTestId("resolved"));

  expect(resolvedProfile).toHaveTextContent("thaiq8nguyen");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
