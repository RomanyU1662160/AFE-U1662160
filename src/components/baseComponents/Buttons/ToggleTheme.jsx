import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Wrapper, StyledToggleThemeButton } from './style';

const ToggleTheme = (props) => {
	const { toggleTheme, theme } = useContext(ThemeContext);
	// useEffect(() => {
	// 	console.log(theme);
	// });
	return (
		<Wrapper theme={theme}>
			<StyledToggleThemeButton onClick={toggleTheme} theme={theme} color="#ffc107">
				Toggle Theme
			</StyledToggleThemeButton>
		</Wrapper>
	);
};

export default ToggleTheme;
