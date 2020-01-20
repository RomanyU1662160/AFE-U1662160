import React, { createContext, useState } from 'react';

export const FlightsContext = createContext();

const FlightsProvider = (props) => {
	const { children } = props;

	const Data = [
		{
			name: 'England',
			capital: 'London',
			continent: 'Europe',
			population: 53000000
		},
		{
			name: 'France',
			capital: 'Paris',
			continent: 'Europe',
			population: 67000000
		},
		{
			name: 'USA',
			capital: 'Washington',
			continent: 'N. America',
			population: 325000000
		}
	];
	return <FlightsContext.Provider value={{ Data }}>{children}</FlightsContext.Provider>;
};

export default FlightsProvider;
