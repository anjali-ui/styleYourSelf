import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
