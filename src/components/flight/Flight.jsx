import React, { Fragment } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import TabGroup from '../baseComponents/tabs/TabGroup';
import Flights from '../../helpers/callApi';

const Flight = (props) => {
	const data = Flights;
	const { flight } = props;
	console.log(data);

	return (
		<Fragment>
			<Card flight={data}>
				<CardTitle> Call sign </CardTitle>
				<CardSubtitle> Card subtitle </CardSubtitle>
				<TabGroup />
			</Card>
		</Fragment>
	);
};

export default Flight;
