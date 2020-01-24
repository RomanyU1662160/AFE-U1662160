import React, { Fragment } from 'react';

const Suggestion = (props) => {
    const {suggestion} = props; 

    return ( 
        <Fragment>
            <li className="alert border mt-2 bg-secondary text-warning"> {suggestion} </li>
         </Fragment>
     );
}
 
export default Suggestion;