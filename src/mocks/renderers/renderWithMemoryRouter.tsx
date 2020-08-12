// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Router } from "react-router-dom";
import { History, LocationDescriptor, createMemoryHistory } from "history";

// const renderWithMemoryRouter = (
//   ui: React.ReactNode,
//   initialEntries: LocationDescriptor[] = ["/my/initial-route"]
// ) => {
//   let historyInTest: History;
//   return {
//     ...render(
//       <MemoryRouter initialEntries={initialEntries}>
//         {ui}
//         < Route
//           path="*"
//           render={({ history }) => {
//             historyInTest = history;
//             return null;
//           }}
//         />
//       </MemoryRouter>),
//     history: historyInTest
//   };
// };

const renderWithMemoryRouter = (
  ui: React.ReactNode,
  initialRoute: string = "/my/initial-route"
) => {
  const history = createMemoryHistory()
  history.push(initialRoute)
  return {
    ...render(
      <Router history={history}>
        {ui}
      </Router>),
    history
  };
};

export default renderWithMemoryRouter;
