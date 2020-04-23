import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ThemeContext } from "../contexts/ThemeContext";
import MainNav from "../components/baseComponents/main-nav/MainNav";
import NavItem from "../components/baseComponents/mainnav-item/NavItem";
import { BrowserRouter, Route, Switch } from "react-router-dom";

afterEach(cleanup);
const theme = {
  color: "#ffc107",
  bg: "#3e70a5",
  ui: "black"
};

it("render Home link", () => {
  const { getByText } = render(
    <ThemeContext.Provider value={{ theme }}>
      <BrowserRouter>
        <MainNav>
          <NavItem title="Home"> </NavItem>
        </MainNav>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
  expect(getByText("Home")).toBeInTheDocument();
});
