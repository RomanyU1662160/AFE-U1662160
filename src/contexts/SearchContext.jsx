import React, { createContext, useEffect, useState } from 'react';
import callApi from '../helpers/callApi';
import MockTeams from '../mock/MockTeams';


export const SearchContext = createContext();

const SearchProvider = (props) => {
	
	const { children } = props;
	const [ data, setData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		setIsLoading(true)
		setTimeout(() => {
			callApi().then( res => setData(res) ); 
			setIsLoading(false)
		}, 3000);
	}, [] ); 

	const filterResults = (userInput) => {
		let filteredResults = [];
		if(userInput){
			 filteredResults = data.filter((item) => {
				const searchterm = userInput.toLowerCase();
				return item.team.name.toLowerCase().includes(searchterm);
			});
		}
	
		return filteredResults;
	};

	return (
		<SearchContext.Provider value={{  data , filterResults, setData, isLoading }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchProvider;
