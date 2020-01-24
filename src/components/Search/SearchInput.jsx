import React, { Fragment, useEffect, useState } from 'react';
import SuggestionsList from './SuggestionsList';


const SearchInput = (props) => {
   
    const {suggestions} = props

    return (
        <Fragment>
            <div className="container">
                <h3>  Search Form </h3>
                <div className="form-group">
                    <input type="text" className="form-control" autoFocus />
                    <SuggestionsList> </SuggestionsList>
                </div>
            </div>
        </Fragment>
    );
}

export default SearchInput;