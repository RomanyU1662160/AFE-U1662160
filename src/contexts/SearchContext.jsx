import React, { createContext, useEffect, useState } from "react";
import callApi from "../helpers/callApi";

export const SearchContext = createContext();

const SearchProvider = props => {
  const { children } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const StoredTeam = localStorage.getItem("localStorageTeam");
  const localStoredTeam = JSON.parse(StoredTeam);
  const [team, setTeam] = useState(localStoredTeam);

  useEffect(() => {
    setIsLoading(true);
    const StoredTeam = localStorage.getItem("localStorageTeam");
    const localStoredTeam = JSON.parse(StoredTeam);
    setTeam(localStoredTeam);
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

  return (
    <SearchContext.Provider
      value={{
        data,
        filterResults,
        setData,
        getTeamDetails,
        isLoading,
        team,
        setTeam
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
