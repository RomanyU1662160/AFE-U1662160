import React, { useContext } from 'react';
import { Wrapper, StyledToggleThemeButton } from './style';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { SearchContext } from '../../../contexts/SearchContext';

const TeamStaticsBtn = (props) => {
	const {handleClick} = props;
	const { theme } = useContext(ThemeContext);



	return (
		<Wrapper>
			<StyledToggleThemeButton theme={theme} color="#ffc107" onClick={() => handleClick()}>
				Get Team Statics
			</StyledToggleThemeButton>
		</Wrapper>
	);
};

export default TeamStaticsBtn;
