import React, { Fragment, useContext, useEffect } from 'react';
import Suggestion from './Suggestion';


const SuggestionsList = (props) => {
	const { suggestions } = props;

	return (
		<Fragment>
			<ul>
				{suggestions.length > 0 ? (
					suggestions.map((suggestion) => {
						return <Suggestion key={suggestion.team.id} suggestion={suggestion} display="block" />;
					})
				) : (
					<p>  </p>
				)}
			</ul>
		</Fragment>
	);
};

export default SuggestionsList;
