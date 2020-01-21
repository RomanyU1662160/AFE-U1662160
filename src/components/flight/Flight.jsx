import React, { Fragment } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import TabGroup from '../baseComponents/tabs/TabGroup';


const Flight = (props) => {
	const { flight } = props;

	return (
		<Fragment>
			<Card  body outline color="danger">
				<CardTitle> <h3 color="text-info">{flight.callsign} </h3>  </CardTitle>
				<CardSubtitle> {flight.icao24} </CardSubtitle>
				 <TabGroup groupId={flight.icao24} ></TabGroup>
			</Card>
		</Fragment>
	);
};

export default Flight;
