import React from 'react';

import './App.css';
import Home from './components/pages/home/Home';
import FlightsProvider from "./contexts/FlightContext";
import ThemeContextProvider from './contexts/ThemeContext';
import SearchProvider from './contexts/SearchContext';

function App() {
  return (
   
    <div className="App">
      <SearchProvider> 
        <ThemeContextProvider> 
                <Home></Home>
        </ThemeContextProvider>
      </SearchProvider>
    </div>
    
      );

  
}

export default App;
