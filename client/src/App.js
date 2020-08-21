import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Signin from './components/screens/Login';
import Singup from './components/screens/Signup';

import { reducer, intialState } from './reducers/subjectReducer';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

export const userContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(userContext);

  return (
    <Switch>
      <Route exact path='/'>
        <Signin />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/signup'>
        <Singup />
      </Route>
      <Route path='/takesubject'>
        <Singup />
      </Route>
      <Route path='/completesubject'>
        <Singup />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
