import React, { Fragment } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import TabGroup from '../baseComponents/tabs/TabGroup';
import CallApi from '../../helpers/callApi';

const Flight = (props) => {
	const { flight } = props;

	return (
		<Fragment>
			<Card  body outline color="danger">
				<CardTitle> <h3 color="text-info">{flight.name} </h3>  </CardTitle>
				<CardSubtitle> {flight.capital} </CardSubtitle>
				 <TabGroup groupId={flight.name} ></TabGroup>
			</Card>
		</Fragment>
	);
};

export default Flight;
