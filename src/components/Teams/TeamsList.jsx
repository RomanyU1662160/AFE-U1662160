import React, { useContext, useEffect, Fragment } from 'react';
import { TeamsContext } from '../../contexts/TeamsContext';
import Team from './Team';

const TeamsList = (props) => {
	const { teams } = useContext(TeamsContext);
	// useEffect(() => {
	// 	console.log(teams);
	// });
	return (
		<Fragment>
			{teams.map((team) => {
				return (
					<Team key={team.id} team={team}>
						{' '}
					</Team>
				);
			})}
		</Fragment>
	);
};

export default TeamsList;
