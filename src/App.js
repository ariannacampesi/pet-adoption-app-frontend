import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {


  return (
    <div className="App">

      <header className="header"> 
        <h1>
          DoggoDoption
        </h1>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link"to='/signin'>Sign In</NavLink>
        <NavLink className="nav-link"to='/signup'>Sign Up</NavLink>

      </header>
    
    <Switch>
      <Route exact path={'/'} component={HomeContainer} />
      <Route path={'/signin'} component={SignIn} />
      <Route path={'/signup'} component={SignUp}/>
    </Switch>
    </div>
  );
}

export default App;
