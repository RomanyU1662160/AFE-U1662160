import React, { createContext, useEffect,useState } from 'react';


export const SearchContext = createContext(); 

const SearchProvider = (props) => {
   
    const init = [
        "Manchester United ",
        "Liverpool",
        "Arsenal",
        "Manchester city",
        "Briton", 
        "Everton",
        "Brighton",
        "West Ham"
    ]; 
 const {children} = props;
 const [data, setData] = useState(init);

const filterResults = ( userInput) => {
    const filteredResults = data.filter(  (item) => {
        console.log("User Input ::" ,   userInput.toLowerCase());

        const searchterm = userInput.toLowerCase();

        console.log( "searchterm:: ", searchterm);
        
        return  item.toLowerCase().search(searchterm);
    } )
    return  console.log("Flitered :: ", filteredResults);
    
}
filterResults("LIVERPOOL");

useEffect( () => {
    console.log(data);
   

})



    return ( 
<SearchContext.Provider value= { { suggestions:data}} > {children} </SearchContext.Provider>
     );
}
 
export default SearchProvider;