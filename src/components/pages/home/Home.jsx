import React, { Fragment } from 'react';
import Header from '../../baseComponents/header/Header';
// import TabGroup from '../../baseComponents/tabs/TabGroup';
import Flights from '../../flights/Flights';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<Flights />
		</Fragment>
	);
};

export default Home;
