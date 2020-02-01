import React from 'react';
import { StyledTab } from './style';
import Tab from './Tab';

const TabGroup = (props) => {
	const { groupId } = props;
	const { team } = props;
	return (
		<StyledTab>
			<Tab type="radio" id={'team' + groupId} name="team" label="Team " content={team.team} />

			<Tab type="radio" id={'info' + groupId} name="team" label="Coach" content={team.coach} />

			<Tab type="radio" id={'maps' + groupId} name="team" label="Venue" content={team.venue} />
		</StyledTab>
	);
};

export default TabGroup;
