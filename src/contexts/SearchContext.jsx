import React, { createContext, useEffect, useState } from "react";
import callApi from "../helpers/callApi";
import { fetchTeamStatistics } from "../helpers/fetchTeamStatics";

export const SearchContext = createContext();

const SearchProvider = props => {
  const { children } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const StoredStatistics =
    localStorage.getItem("localStorageStatistics") || "{}";
  const StoredTeam = localStorage.getItem("localStorageTeam");

  const localStoredTeam = JSON.parse(StoredTeam);
  const [team, setTeam] = useState(localStoredTeam);

  const localStoredStatistics = JSON.parse(StoredStatistics);
  const [statistics, setStatistics] = useState(localStoredStatistics);

  console.log("statistics in Context::", statistics);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      callApi().then(res => setData(res));
      setIsLoading(false);
    }, 1000);
  }, []);

  const filterResults = userInput => {
    let filteredResults = [];
    if (userInput) {
      filteredResults = data.filter(item => {
        const searchTerm = userInput.toLowerCase();
        return item.team.name.toLowerCase().includes(searchTerm);
      });
    }
    return filteredResults;
  };

  const getTeamDetails = id => {
    const selectedTeam = data.filter(x => {
      return x.team.id === id;
    });

    localStorage.setItem("localStorageTeam", JSON.stringify(selectedTeam[0]));
    const StorageTeam = localStorage.getItem("localStorageTeam");
    const localStorageTeam = JSON.parse(StorageTeam);
    return selectedTeam ? setTeam(selectedTeam[0]) : setTeam(localStorageTeam);
  };

  /*method is using the mock data 
     
  */
  const getTeamStatistics = async id => {
    const teamStatistics = await fetchTeamStatistics(id);
    console.log("teamStatistics in Context::", teamStatistics[0]);

    localStorage.setItem(
      "localStorageStatistics",
      JSON.stringify(teamStatistics[0].response)
    );
    let localStorageStatistics = localStorage.getItem("localStorageStatistics");
    const storedStatistics = JSON.parse(localStorageStatistics);
    return teamStatistics
      ? setStatistics(teamStatistics[0].response)
      : setStatistics(storedStatistics);
  };

  /* Method is using the data from API 
      please uncomment the method in helpers/fetchTeamStatics.js as well
  */

  // const getTeamStatistics = async id => {
  //   const teamStatistics = await fetchTeamStatistics(id).then(res => {
  //     localStorage.setItem("localStorageStatistics", JSON.stringify(res));
  //   });
  //   console.log("teamStatistics in Context::", teamStatistics);
  //   let localStorageStatistics = localStorage.getItem("localStorageStatistics");
  //   const storedStatistics = JSON.parse(localStorageStatistics);
  //   return teamStatistics
  //     ? setStatistics(teamStatistics)
  //     : setStatistics(storedStatistics);
  // };

  return (
    <SearchContext.Provider
      value={{
        data,
        filterResults,
        setData,
        getTeamDetails,
        getTeamStatistics,
        isLoading,
        setIsLoading,
        team,
        statistics,
        setTeam
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
