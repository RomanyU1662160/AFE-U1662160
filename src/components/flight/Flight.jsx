import React, { Fragment } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import TabGroup from '../baseComponents/tabs/TabGroup';
import CallApi from '../../helpers/callApi';

const Flight = (props) => {
	const { flight } = props;

	return (
		<Fragment>
			<Card>
				<CardTitle> {flight.name} </CardTitle>
				<CardSubtitle> {flight.capital} </CardSubtitle>
				<TabGroup />
			</Card>
		</Fragment>
	);
};

export default Flight;
