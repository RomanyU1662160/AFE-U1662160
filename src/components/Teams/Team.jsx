import React, { Fragment } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import TabGroup from '../baseComponents/tabs/TabGroup';

const Team = (props) => {
	const { team } = props;
	return (
		<Fragment>
			<Card body outline color="danger">
				<CardTitle>
					{' '}
					<h3 color="text-info">{team.name} </h3>
				</CardTitle>
				<CardSubtitle> {team.country} </CardSubtitle>
				<CardBody>
					<TabGroup groupId={team.id} team={team} />
				</CardBody>
			</Card>
		</Fragment>
	);
};

export default Team;
