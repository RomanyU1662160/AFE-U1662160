import React from 'react';

import './App.css';



import ThemeContextProvider from './contexts/ThemeContext';
import SearchProvider from './contexts/SearchContext';
import TeamsProvider from './contexts/TeamsContext';
import AllTeams from './components/pages/teams/AllTeams';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/baseComponents/header/Header';
import Home from './components/pages/home/Home';
import SearchPage from './components/pages/search/SearchPage';


function App()
{
  return (
    <BrowserRouter>
      <div className="App">
        <SearchProvider>
          <ThemeContextProvider>
            <Header />
            <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={SearchPage} />
             </Switch>
          </ThemeContextProvider>
        </SearchProvider>
      </div>
    </BrowserRouter>

  );

}

export default App;
