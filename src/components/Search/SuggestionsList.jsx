import React, { Fragment, useContext, useEffect } from 'react';
import Suggestion from './Suggestion';
import { StyledSuggestion } from './style';

const SuggestionsList = (props) => {
	const { list } = props;

	return (
		<Fragment>
			<ul>
				{list.length > 0 ? (
					list.map((suggestion) => {
						return <Suggestion key={suggestion} suggestion={suggestion} />;
					})
				) : (
					<p> No Results found </p>
				)}
			</ul>
		</Fragment>
	);
};

export default SuggestionsList;
