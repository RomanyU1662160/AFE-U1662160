import React from 'react';

import './App.css';
import Home from './components/pages/home/Home';
import FlightsProvider from "./contexts/FlightContext";
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
   
      <div className="App">
   <ThemeContextProvider> 
       <FlightsProvider> 
          <Home></Home>
        </FlightsProvider>
        </ThemeContextProvider>
      </div>
    
      );

  
}

export default App;
