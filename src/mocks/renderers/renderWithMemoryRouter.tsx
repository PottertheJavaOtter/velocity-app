// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { History, LocationDescriptor } from "history";

const renderWithMemoryRouter = (
  ui: React.ReactNode,
  initialEntries: LocationDescriptor[] = ["/my/initial-route"]
) => {
  let historyInTest: History;
  return {
    ...render(
      <MemoryRouter initialEntries={initialEntries}>
        {ui}
        <Route
          path="*"
          render={({ history }) => {
            historyInTest = history;
            return null;
          }}
        />
      </MemoryRouter>),
    history: historyInTest
  };
};

export default renderWithMemoryRouter;
