import React from "react";
import { render } from "@testing-library/react";
import DividendBreakdown from "./DividendBreakdown";

describe("DividendBreakdown", () => {
  it("should render the dividend breakdowns", () => {
    const { container } = render(<DividendBreakdown dividend={10909.12} />);
    expect(container).toMatchSnapshot();
  });
});
