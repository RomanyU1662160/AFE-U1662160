import React from "react";
import {render, cleanup} from "@testing-library/react";
//import {render, cleanup} from "./test-utils";
import "@testing-library/jest-dom";
import TeamPage from "../components/pages/team/TeamPage";
import {SearchContext} from "../contexts/SearchContext";
import {ThemeContext} from "../contexts/ThemeContext";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";

const defaultTheme = {
  color: "#ffc107",
  bg: "#3e70a5",
  ui: "black"
};

const statistics = {
  league: {
    id: 39,
    name: "Premier League",
    country: "England",
    logo: "https://media.api-football.com/leagues/2.png",
    flag: "https://media.api-football.com/flags/gb.svg"
  },
  team: {
    id: 33,
    name: "Manchester United",
    logo: "https://media.api-football.com/teams/33.png"
  },
  matches: {},

  goals: {
    for: {
      total: {home: 24, away: 12, total: 36},
      average: {home: "1.8", away: "1.0", total: "1.4"}
    },
    against: {
      total: {home: 12, away: 17, total: 29},
      average: {home: "0.9", away: "1.4", total: "1.2"}
    }
  }
};

const team = {
  team: {
    id: 33,
    name: "Mock Team name ",
    country: "England",
    founded: 1878,
    national: false
  },

  coach: {
    id: 19,
    name: "Mock coach name ",
    firstname: "Mock coach first_name",
    lastname: "Mock coach last_name"
  },
  venue: {
    name: "mock venue name ",
    address: "mock address ",
    city: "mock city ",
    capacity: 76212
  }
};

describe("team page", () => {
  it("renders with team's name in the title", () => {
    const {getByTestId} = render(
      <SearchContext.Provider value={{team, statistics}}>
        <ThemeContext.Provider value={{defaultTheme}}>
          <TeamPage></TeamPage>
        </ThemeContext.Provider>
      </SearchContext.Provider>
    );
    const TeamPageTitle = getByTestId("teampagetitle");

    expect(TeamPageTitle).toHaveTextContent(
      "Welcome to Mock Team name 's page"
    );
  });
});
