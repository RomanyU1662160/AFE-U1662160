import React, { Fragment } from 'react';
import Header from '../../baseComponents/header/Header';
import TeamsList from '../../Teams/TeamsList';

const AllTeams = () => {
	return (
		<Fragment>
			<Header />
			<TeamsList />
		</Fragment>
	);
};

export default AllTeams;
