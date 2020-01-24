import React, { createContext, useState, useEffect } from 'react';
import themes from '../Styles/themes';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const { children } = props;
	const { defaultTheme, darkTheme, primaryTheme } = themes;
	const [ theme, setTheme ] = useState(defaultTheme);
	const [ isDefault, setIsDefault ] = useState(true);

	useEffect(() => {
		isDefault ? setTheme(defaultTheme) : setTheme(darkTheme);
	});

	const toggleTheme = () => {
		console.log(isDefault);
		setIsDefault(!isDefault);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}> {children} </ThemeContext.Provider>;
};

export default ThemeContextProvider;
