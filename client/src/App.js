import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Signin from './components/screens/Login';
import Singup from './components/screens/Signup';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Singup />
      </Route>
      <Route path='/signup'>
        <Signin />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
