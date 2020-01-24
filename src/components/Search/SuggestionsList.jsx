import React, { Fragment, useContext, useEffect } from 'react';
import Suggestion from './Suggestion';
import { SearchContext } from '../../contexts/SearchContext';

const SuggestionsList = (props) => {
 
    const {suggestions} = useContext(SearchContext); 
useEffect( () => {
    console.log(  "Suggestions :: ",suggestions);
    
} )

    return ( 
        <Fragment>  
            <ul>
            { suggestions.length > 0 ?  suggestions.map( suggestion => { 
               return  <Suggestion key={suggestion} suggestion= {suggestion}> </Suggestion> 
            })   :
            <p> No Results found </p>}
            </ul>

        </Fragment>
     );
}
 
export default SuggestionsList;