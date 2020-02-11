import React, { Fragment, useContext, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Suggestion from './Suggestion';


const SuggestionsList = (props) => {
	const { suggestions, isLoading } = props;

	return (
		<Fragment>
				{ isLoading ?
					<Loader 
						type="Oval"
						color="#00BFFF"
						height={100}
						width={100}	
					/>
					:
					suggestions.length > 0 &&
					<ul>
						{ suggestions.map(suggestion => 
							<Suggestion key={suggestion.team.id} suggestion={suggestion} display="block" />
						)}
					</ul> 

				}
		</Fragment>
	);
};

export default SuggestionsList;
