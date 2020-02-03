import React, { useContext } from 'react';
import { Wrapper, StyledToggleThemeButton } from './style';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { SearchContext } from '../../../contexts/SearchContext';

const TeamStaticsBtn = () => {
	const { theme } = useContext(ThemeContext);
	const { getTeamStatics } = useContext(SearchContext);

	const handleGetStatics = () => {
		const teamStatics = getTeamStatics();
		console.log('teamStatics In BTN ', teamStatics);
		return teamStatics;
	};

	return (
		<Wrapper>
			<StyledToggleThemeButton theme={theme} color="#ffc107" onClick={handleGetStatics}>
				Get Team Statics
			</StyledToggleThemeButton>
		</Wrapper>
	);
};

export default TeamStaticsBtn;
