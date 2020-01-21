import React, { useContext, useEffect, Fragment } from 'react';
import { Wrapper } from './style';
import Flight from '../flight/Flight';
import { FlightsContext } from '../../contexts/FlightContext';

const Flights = (props) => {
	const ContextFlights = useContext(FlightsContext);
	const flightList = ContextFlights.Data.map(flight => <Flight flight={flight} />);

	
	return (
		<Wrapper>
			{flightList}
		</Wrapper>
	);
};

export default Flights;
