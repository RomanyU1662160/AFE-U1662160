import React from "react";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "../components/inputs/SearchInput";
import {SearchContext} from "../contexts/SearchContext";

afterEach(cleanup);

it("render the search title", () => {
  const data = [];
  const {getByTestId} = render(
    <SearchContext.Provider value={{data}}>
      <SearchInput></SearchInput>
    </SearchContext.Provider>
  );
  const title = getByTestId("searchformtitle");
  expect(title).toHaveTextContent("Search Form");
});
