import React from 'react';
import renderWithMemoryRouter from '../mocks/renderers/renderWithMemoryRouter';
import MainTabs from './MainTabs';
import { screen } from '@testing-library/dom';

jest.mock("./SchedulePage", () => {
  return () => <div>On the Schedule Page</div>
});
jest.mock("./HomePage/HomePage", () => {
  return () => <div>On the Home Page</div>
})
jest.mock("./Income/Income", () => {
  return () => <div>On the Income Page</div>
})
jest.mock("./SessionDetail", () => {
  return () => <div>On the Session Page</div>
})
jest.mock("./Portfolio/Portfolio", () => {
  return () => <div>On the Portfolio Page</div>
})

describe("MainTabs", () => {
  describe('default route', () => {
    it('should take you to Home Page', () => {
      const { container, history } = renderWithMemoryRouter(<MainTabs />, ["/tabs"]);
      expect(screen.getByText("On the Home Page")).toBeInTheDocument();
      expect(history.location.pathname).toContain("/tabs/home")
      expect(container).toMatchSnapshot();
    })
  })

  describe('/home', () => {
    it('should take you to Home Page', () => {
      renderWithMemoryRouter(<MainTabs />, ["/tabs/home"]);
      expect(screen.getByText("On the Home Page")).toBeInTheDocument();
    })
  })

  describe('/schedule', () => {
    it('should take you to Schedule Page', () => {
      renderWithMemoryRouter(<MainTabs />, ["/tabs/schedule"]);
      expect(screen.getByText("On the Schedule Page")).toBeInTheDocument();
    })

    describe("/:id", () => {
      it('should take you to Session Page', () => {
        renderWithMemoryRouter(<MainTabs />, ["/tabs/schedule/some-id"]);
        expect(screen.getByText("On the Session Page")).toBeInTheDocument();
      })
    })
  })

  describe("isLogged in", () => {
    describe('/income', () => {
      it('should take you to Income Page', () => {
        renderWithMemoryRouter(<MainTabs isLoggedin />, ["/tabs/income"]);
        expect(screen.getByText("On the Income Page")).toBeInTheDocument();
      })
    })

    describe('/porfolio', () => {
      it('should take you to Home Page', () => {
        renderWithMemoryRouter(<MainTabs isLoggedin />, ["/tabs/porfolio"]);
        expect(screen.getByText("On the Portfolio Page")).toBeInTheDocument();
      })
    })
  })
});
