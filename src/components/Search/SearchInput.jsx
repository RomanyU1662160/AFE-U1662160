import React, { Fragment, useEffect, useState, useContext } from 'react';
import SuggestionsList from './SuggestionsList';
import {Input,FormGroup} from 'reactstrap'; 

import { SearchContext } from '../../contexts/SearchContext';


const SearchInput = (props) => {
	const { data, filterResults, setData, isLoading } = useContext(SearchContext);
	const [ MatchedData, setMatchedData ] = useState(data);

	console.log(isLoading)

	const handleFilterSearch = (input) => {
		const results = filterResults(input);
		console.log("results", results );
		return setMatchedData(results);
	};

	return (
		<>
			<div className="container">
				<h3 className="text-center"> Search Form </h3>
				<FormGroup>
					<Input
						type="text"
						onChange={(e) => handleFilterSearch(e.target.value)}
						placeholder="Search Teams.."
						autoFocus
					/>

					<SuggestionsList suggestions={MatchedData} isLoading={isLoading}> </SuggestionsList>
					</FormGroup>
				</div>
				
		</>
	);
};

export default SearchInput;
