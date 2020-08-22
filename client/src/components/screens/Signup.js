import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import '../../App.css';

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, SetEmail] = useState('');
  const [school, setSchool] = useState('');

  const postSignup = () => {
    fetch('http://localhost:5000/student/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        school,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push('student/signup');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <dvi className='mycard'>
      <div className='card auth-card'>
        <h3>Sign up</h3>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type='text'
          placeholder='School'
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <button
          onClick={() => postSignup()}
          className='btn waves-effect waves-light #64b5f6 blue darken-1'
        >
          Signup
        </button>
        <h5>
          <Link to='/signin'>Have An Already Signin</Link>
        </h5>
      </div>
    </dvi>
  );
};

export default Signup;
