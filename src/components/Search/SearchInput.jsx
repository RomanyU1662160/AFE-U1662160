import React, {Fragment, useEffect, useState, useContext} from 'react';
import SuggestionsList from './SuggestionsList';
import {Input, FormGroup} from 'reactstrap';
import {TextInput } from 'react-materialize'; 

import {SearchContext} from '../../contexts/SearchContext';


const SearchInput = (props) => {
	const {data, filterResults, setData, isLoading} = useContext(SearchContext);
	const [MatchedData, setMatchedData] = useState(data);

	

	const handleFilterSearch = (input) => {
		const results = filterResults(input);
		console.log("results", results);
		return setMatchedData(results);
	};

	return (
		<>
			<div className="container">
				<h3 className="text-center"> Search Form </h3>
				<FormGroup>
					<div className="input-field">
						<Input
						className="validate"
							type="text"
							onChange={(e) => handleFilterSearch(e.target.value)}
							placeholder="Search Teams.."
							autoFocus
						/>
						 <label htmlFor="first_name">Search Teams </label>

					
					</div>
					
					<SuggestionsList suggestions={MatchedData} isLoading={isLoading}> </SuggestionsList>
				</FormGroup>
		
			</div>


		</>
	);
};

export default SearchInput;
