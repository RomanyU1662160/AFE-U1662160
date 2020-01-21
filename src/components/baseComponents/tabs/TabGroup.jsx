import React from 'react';
import { StyledTab } from './style';
import Tab from './Tab';

const TabGroup = (props) => {
	const{groupId} = props
	
	return (
		<StyledTab>
			<Tab type="radio" id={"flight"+groupId} name="flight"   label="Flight" />
			<hr/>
			<Tab type="radio" id={"info"+groupId}   name="flight"   label="Info" />
			<hr/>
			<Tab type="radio" id={"maps"+groupId}   name="flight"   label="Maps" />
		</StyledTab>
	);
};

export default TabGroup;
