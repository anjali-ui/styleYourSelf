import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homePage';
import Shop from './Pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './Pages/signInAndSignUp/signInAndSignUp';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signIn' component={SignInAndSignUp} />
        </Switch>
    </div>
  );
}

export default App;
