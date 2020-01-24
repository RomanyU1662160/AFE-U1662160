import React, { createContext, useState, useEffect } from 'react';
import callApi from '../helpers/callApi.js';

export const FlightsContext = createContext();

const FlightsProvider = (props) => {
	const { children } = props;
	const [ flights, setFlights ] = useState(null);

	useEffect(() => {
		const fetchFlights = async () => {
			const { flights: data } = await callApi();
			// console.log(data);
			setFlights(data);
		};
		fetchFlights();
	}, []);

	if (!flights) {
		return <div>Loading please wait...</div>;
	}

	// console.log(flights);
	return <FlightsContext.Provider value={{ Data: flights }}>{children}</FlightsContext.Provider>;
};

export default FlightsProvider;
