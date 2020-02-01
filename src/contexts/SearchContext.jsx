import React, { createContext, useEffect, useState } from 'react';
import callApi from '../helpers/callApi';
import MockTeams from '../mock/MockTeams';
import { log } from 'util';

export const SearchContext = createContext();

const SearchProvider = (props) => {
	const { children } = props;
	const [ data, setData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ team, setTeam ] = useState({});

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			callApi().then((res) => setData(res));
			console.log(data);

			setIsLoading(false);
		}, 1000);
	}, []);

	const filterResults = (userInput) => {
		let filteredResults = [];
		if (userInput) {
			filteredResults = data.filter((item) => {
				const searchterm = userInput.toLowerCase();
				return item.team.name.toLowerCase().includes(searchterm);
			});
		}

		return filteredResults;
	};

	const getTeamDetails = (id) => {
		const selectedTeam = data.filter((x) => {
			return x.team.id == id;
		});
		console.log('Team :: ', team);
		localStorage.setItem('team', JSON.stringify(selectedTeam[0]));
		return selectedTeam ? setTeam(selectedTeam[0]) : null;
	};

	return (
		<SearchContext.Provider value={{ data, filterResults, setData, getTeamDetails, isLoading, team }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchProvider;
