import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Signin from './components/screens/Login';
import Singup from './components/screens/Signup';
import {
  reducer,
  intialState,
} from '../src/components/reducers/subjectReducer';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

export const studentContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(studentContext);

  useEffect(() => {
    const studenttoken = JSON.parse(localStorage.getItem('token'));
    if (studenttoken) {
      dispatch({ type: 'STUDENT', payload: studenttoken });
    } else {
      history.push('/signin');
    }
  }, []);

  return (
    <Switch>
      <Route exact path='/'>
        <Singup />
      </Route>
      <Route path='/signup'>
        <Singup />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <studentContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </studentContext.Provider>
  );
}

export default App;
