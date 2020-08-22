import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { studentContext } from '../../App';
import M from 'materialize-css';
import '../../App.css';

const Login = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(studentContext);
  const [password, setPassword] = useState('');
  const [email, SetEmail] = useState('');

  const postSignin = () => {
    fetch('/student/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('sudent', JSON.stringify(data.token));
        dispatch({ type: 'STUDENT', payload: data });
        M.toast({
          html: 'Signin Sucessfully',
          classes: '#43a047 green darken-1',
        });
        history.push('/home');
      });
  };
  return (
    <dvi className='mycard'>
      <div className='card auth-card'>
        <h3> Sign In</h3>
        <input
          type='text'
          placeholder='Eamil'
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => postSignin()}
          className='btn waves-effect waves-light #64b5f6 blue darken-1'
        >
          Signin
        </button>
        <h5>
          <Link to='/signin'>Don't Have An Account SignUp</Link>
        </h5>
      </div>
    </dvi>
  );
};

export default Login;
