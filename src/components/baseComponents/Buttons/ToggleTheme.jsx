import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Wrapper, StyledToggleThemeButton } from './style';

const ToggleTheme = (props) => {
	const { isDefault, toggleTheme, theme } = useContext(ThemeContext);
	useEffect(() => {
		console.log(isDefault);
	});
	return (
		<Wrapper theme={theme}>
			<StyledToggleThemeButton onClick={toggleTheme} theme={theme} color="#ffc107">
			{isDefault ? " Dark Theme": " Default Theme "}	
			</StyledToggleThemeButton>
		</Wrapper>
	);
};

export default ToggleTheme;
