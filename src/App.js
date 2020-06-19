import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";

import Home from './Components/Home';
import Results from './Components/Results';
import Members from './Components/Members';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/members" component={Members}/>
          <Route path="/results" component={Results}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
