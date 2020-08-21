import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import '../../App.css';

const Signup = () => {
  return (
    <dvi className='mycard'>
      <div className='card auth-card'>
        <h3>InterLike</h3>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Eamil' />
        <input type='password' placeholder='Password' />
        <div className='file-field input-field'>
          <div className='btn #64b5f6 blue darken-1'>
            <span>Uplaod Profile</span>
            <input type='file' />
          </div>
          <div className='file-path-wrapper'>
            <input className='file-path validate' type='text' />
          </div>
        </div>

        <button className='btn waves-effect waves-light #64b5f6 blue darken-1'>
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
