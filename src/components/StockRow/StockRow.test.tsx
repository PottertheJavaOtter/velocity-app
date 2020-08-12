import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StockRow from "./StockRow";
import renderWithMemoryRouter from "../../mocks/renderers/renderWithMemoryRouter";

describe("StockRow", () => {
  const props = {
    id: "stock-id", ticker: "OKE", name: "ONEOK", shares: 981.2, dividendPerShare: 102.1
  }

  it("should render the stock's information", () => {
    const { container } = render(<StockRow {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should route to the stock's info page on click", () => {
    const { history } = renderWithMemoryRouter(<StockRow {...props} />);
    const stockRow = screen.getByTestId("stock-row-OKE");
    expect(stockRow.getAttribute("href")).toBe("/stock/stock-id")
    // expect(screen.getByTestId("stock-row-OKE").nodeName).toEqual("A")
    // userEvent.click(screen.getByTestId("stock-row-OKE"))
    // expect(history.location.pathname).toContain("/stock/stock-id");
  });
});
