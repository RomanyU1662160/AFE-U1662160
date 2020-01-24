import React, { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = (props) => {
	const init = [
		'Manchester United ',
		'Liverpool',
		'Arsenal',
		'Manchester City',
		'Briton',
		'Everton',
		'Brighton',
		'West Ham'
	];
	const { children } = props;
	const [ data, setData ] = useState(init);

	const filterResults = (userInput = '') => {
		const filteredResults = data.filter((item) => {
			console.log(userInput);
			const searchterm = userInput.toLowerCase();
			return item.toLowerCase().includes(searchterm);
		});
		return filteredResults;
	};

	return (
		<SearchContext.Provider value={{ suggestions: data ? data : [], filterResults, setData }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchProvider;
