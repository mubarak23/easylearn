import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Signin from './components/screens/Login';
import Singup from './components/screens/Signup';
import AddSubject from './components/screens/AddSubject';
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
    const student = localStorage.getItem('stuent');
    console.log(student);
    if (student) {
      dispatch({ type: 'STUDENT', payload: student });
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
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/addsubject'>
        <AddSubject />
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
