import React, { useContext, useEffect, Fragment } from 'react';
import { Wrapper } from './style';
import Flight from '../flight/Flight';
import { FlightsContext } from '../../contexts/FlightContext';

const Flights = (props) => {
	const ContextFlights = useContext(FlightsContext);

	useEffect(() => {
		console.log('Use Effect ran ', ContextFlights.Data);
	});
	return (
		<Wrapper>
			{ContextFlights.Data.map((flight) => {
				return <Flight flight={flight}> </Flight>;
			})}
		</Wrapper>
	);
};

export default Flights;
