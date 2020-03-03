/*
import {render} from "@testing-library/react";
import {ThemeContext} from "../contexts/ThemeContext";
import SearchProvider from "../contexts/SearchContext";

const AllTheProviders = ({children}) => {
  const defaultTheme = {
    color: "#ffc107",
    bg: "#3e70a5",
    ui: "black"
  };

  const mockTeam = {
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

  const mockStatistics = {
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
    matches: {
      played: {home: 13, away: 12, total: 25},
      wins: {home: 6, away: 3, total: 9},
      draws: {home: 6, away: 3, total: 9},
      loses: {home: 2, away: 6, total: 8}
    },
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

  return (
    <SearchProvider value={{team, mockStatistics}}>
      <ThemeContext.Provider value={{defaultTheme}}>
        {children}
      </ThemeContext.Provider>
    </SearchProvider>
  );
};
*/

const customRender = (ui, options) => {
  render(ui, {wrapper: AllTheProviders, ...options});
};

// re-export everything
export * from "@testing-library/react";

// override render method
export {customRender as render};
