import React, { createContext, useState, useEffect } from "react";
import callApi from "../helpers/callApi";

export const TeamsContext = createContext();
const init = [
  {
    id: 33,
    name: "Manchester United",
    country: "England",
    founded: 1878,
    is_national: false,
    logo: "https://media.api-football.com/teams/33.png"
  },

  {
    id: 34,
    name: "Newcastle",
    country: "England",
    founded: 1892,
    is_national: false,
    logo: "https://media.api-football.com/teams/34.png"
  }
];

const TeamsProvider = props => {
  const { children } = props;
  const [teams] = useState(init);
  useEffect(() => {
    console.log(teams);
  });

  return (
    <TeamsContext.Provider value={{ teams }}>
      {" "}
      {children}{" "}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;
