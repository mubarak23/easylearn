import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/signin' className='brand-logo left'>
          EasyLearn
        </Link>
        <ul id='nav-mobile' className='right'>
          <li key='5'>
            <Link to='/signin'>Signin</Link>
          </li>

          <li key='6'>
            <Link to='/signup'>Signup</Link>
          </li>
          <li key='7'>
            <Link to='/addsubject'>Add Subject</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
