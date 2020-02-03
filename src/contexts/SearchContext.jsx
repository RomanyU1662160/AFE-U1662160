import React, { createContext, useEffect, useState } from 'react';
import callApi from '../helpers/callApi';
import fetchTeamStatics from '../helpers/fetchStatics';

export const SearchContext = createContext();

const SearchProvider = (props) => {
	const { children } = props;
	const [ data, setData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ team, setTeam ] = useState({});
	const [ statics, setStatics ] = useState({});

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

		localStorage.setItem('localStorageTeam', JSON.stringify(selectedTeam[0]));
		const StorageTeam = localStorage.getItem('localStorageTeam');
		const localStorageTeam = JSON.parse(StorageTeam);
		console.log(localStorageTeam);
		console.log(selectedTeam[0]);
		return selectedTeam ? setTeam(selectedTeam[0]) : setTeam(localStorageTeam);
	};

	// const getTeamStatics = async (id) => {
	// 	const url = ` https://api-football-beta.p.rapidapi.com/statistics?season=2019&team=${id}&league=39`;
	// 	const statics = await fetch(url, {
	// 		method: 'get',
	// 		headers: {
	// 			'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
	// 			'x-rapidapi-key': 'b42ff9aec1mshf038ebfe4dc2a03p1fb971jsn092088567d66'
	// 		}
	// 	})
	// 		.then((res) => console.log(statics))
	// 		.catch((err) => console.log(err));

	// 	return statics;
	// };

	const getTeamStatics = () => {
		const data = fetchTeamStatics();
		const statics = data;
		console.log(statics);
		return data;
	};

	return (
		<SearchContext.Provider
			value={{ data, filterResults, setData, getTeamDetails, isLoading, team, setTeam, getTeamStatics }}
		>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchProvider;
