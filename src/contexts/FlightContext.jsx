import React, { createContext, useState, useEffect } from 'react';
import callApi from "../helpers/callApi.js"

export const FlightsContext = createContext();

const Data = [
	{
		"name": "3c4ad0",
		"firstSeen": "1517230790",
		"estDepartureAirport": "EDDF",
		"lastSeen": "1517238306",
		"estArrivalAirport": null,
		"callsign": "DLH630",
		"estDepartureAirportHorizDistance": 4319,
		"estDepartureAirportVertDistance": 65,
		"estArrivalAirportHorizDistance": null,
		"estArrivalAirportVertDistance": null,
		"departureAirportCandidatesCount": 1,
		"arrivalAirportCandidatesCount": 0
	},
	{
		"name": "3c4ad1",
		"firstSeen": "1517230790",
		"estDepartureAirport": "EDDF",
		"lastSeen": "1517238306",
		"estArrivalAirport": null,
		"callsign": "DLH630",
		"estDepartureAirportHorizDistance": 4319,
		"estDepartureAirportVertDistance": 65,
		"estArrivalAirportHorizDistance": null,
		"estArrivalAirportVertDistance": null,
		"departureAirportCandidatesCount": 1,
		"arrivalAirportCandidatesCount": 0
	}

];

const FlightsProvider = (props) => {
	const { children } = props;
	const [flights, setFlights] = useState(null);

	useEffect(() => {
		const fetchFlights = async () => {
			const {flights: data} = await callApi();
			setFlights(data);
		}
		fetchFlights();
	}, []);
	

	if (!flights) {
		return <div>Loading please wait...</div>
	}

	console.log(flights);
	return <FlightsContext.Provider value={{ Data: flights }}>{children}</FlightsContext.Provider>;
};

export default FlightsProvider;
