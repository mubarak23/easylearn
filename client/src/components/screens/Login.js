import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import '../../App.css';

const Login = () => {
  const history = useHistory();
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
