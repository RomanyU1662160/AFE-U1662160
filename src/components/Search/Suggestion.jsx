import React, { Fragment, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledLi } from './style';

const Suggestion = (props) => {
	const { suggestion } = props;
	const { theme } = useContext(ThemeContext);

	return (
		<Fragment>
			<StyledLi className="alert border mt-2 " theme={theme}>
				{suggestion}{' '}
			</StyledLi>
		</Fragment>
	);
};

export default Suggestion;
