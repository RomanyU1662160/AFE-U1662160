import React from 'react';

import './App.css';
import Home from './components/pages/home/Home';
import FlightsProvider from "./contexts/FlightContext";

function App() {
  return (
   
      <div className="App">
       <FlightsProvider> 
        <Home></Home>
      </FlightsProvider>
      </div>
    
      );

  
}

export default App;
