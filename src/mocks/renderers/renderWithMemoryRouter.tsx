// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const renderWithMemoryRouter = (
  ui: React.ReactNode,
  initialEntries: string[] = ["/my/initial-route"]
) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={history}>
        {ui}
      </Router>),
    history
  };
};

export default renderWithMemoryRouter;
