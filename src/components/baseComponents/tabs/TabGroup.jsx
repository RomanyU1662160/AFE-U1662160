import React from 'react';
import { StyledTab } from './style';
import Tab from './Tab';

const TabGroup = (props) => {
	const { groupId } = props;
	const { team } = props;
	return (
		<StyledTab>
			<Tab type="radio" id={'team' + groupId} name="team" label="Team " content={team.name} />

			<Tab type="radio" id={'info' + groupId} name="team" label="Info" content={team.country} />

			<Tab type="radio" id={'maps' + groupId} name="team" label="About" content={team.founded} />
		</StyledTab>
	);
};

export default TabGroup;
