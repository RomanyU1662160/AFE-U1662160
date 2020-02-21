import React from "react";
import "./App.css";

import ThemeContextProvider from "./contexts/ThemeContext";
import SearchProvider from "./contexts/SearchContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/baseComponents/header/Header";
import Home from "./components/pages/home/Home";
import SearchPage from "./components/pages/search/SearchPage";
import AboutPage from "./components/pages/about/AboutPage";
import TeamPage from "./components/pages/team/TeamPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchProvider>
          <ThemeContextProvider>
            <Header />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route path="/team/:id" component={TeamPage} />
            </Switch>
          </ThemeContextProvider>
        </SearchProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
