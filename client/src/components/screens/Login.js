import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import '../../App.css';

const Login = () => {
  return (
    <dvi className='mycard'>
      <div className='card auth-card'>
        <h3>EasyLearn Sign In</h3>
        <input type='text' placeholder='Eamil' />
        <input type='password' placeholder='Password' />
        <button className='btn waves-effect waves-light #64b5f6 blue darken-1'>
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
