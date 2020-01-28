import React, { Fragment, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledLi } from './style';
import {useEffect} from 'react';

const Suggestion = (props) => {
	const { suggestion, display } = props;
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		console.log ("display", display);
	})

	return (
		<Fragment>
			<StyledLi className="alert border mt-2 " theme={theme} display={display} >
				{  suggestion ? suggestion.team.name: '' }
			</StyledLi>
		</Fragment>
	);
};

export default Suggestion;
