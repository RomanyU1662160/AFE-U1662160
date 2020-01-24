import React, { Fragment, useEffect, useState, useContext } from 'react';
import SuggestionsList from './SuggestionsList';
import { SearchContext } from '../../contexts/SearchContext';

const SearchInput = (props) => {
	const { suggestions, filterResults, setData } = useContext(SearchContext);
	const [ MatchedData, setMatchedData ] = useState(suggestions);

	const handleFilterSearch = (input) => {
		const results = filterResults(input);

		return setMatchedData(results);
	};
	return (
		<Fragment>
			<div className="container">
				<h3> Search Form </h3>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						onChange={(e) => handleFilterSearch(e.target.value)}
						autoFocus
					/>
					<SuggestionsList list={MatchedData}> </SuggestionsList>
				</div>
			</div>
		</Fragment>
	);
};

export default SearchInput;
