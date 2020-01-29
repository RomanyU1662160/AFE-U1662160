import React from 'react';

import './App.css';
import Home from './components/pages/home/Home';
import ThemeContextProvider from './contexts/ThemeContext';
import SearchProvider from './contexts/SearchContext';
import TeamsProvider from './contexts/TeamsContext';
import AllTeams from './components/pages/teams/AllTeams';
import {BrowserRouter, Route} from 'react-router-dom'; 
import Header from './components/baseComponents/header/Header';
import About from './components/pages/About/about';


function App()
{
  return (
<BrowserRouter> 
    <div className="App container">
     
      <SearchProvider>
        <ThemeContextProvider>
           <Header></Header>
           <Route  path='/Home' component={Home}/ >  
           <Route exact path='/Teams'component={AllTeams} />  
           <Route exact path='/About'component={About}/>  
        </ThemeContextProvider>
      </SearchProvider>
    </div>
  </BrowserRouter>

  );

}

export default App;
