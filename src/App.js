import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";

import Home from './Components/Home';
import Results from './Components/Results';
import Tournois from './Components/Tournois';
import Links from './Components/Links';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/results" component={Results}/>
          <Route path="/tournois" component={Tournois}/>
          <Route path="/links" component={Links} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
