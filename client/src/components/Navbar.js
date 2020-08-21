import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../App';

const NavBar = () => {
    
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/signin' className='brand-logo left'>
            InternLike
          </Link>
          <ul id='nav-mobile' className='right'>
          <li key='5'>
            <Link to='/signin'>Signin</Link>
          </li>,
          <li key='6'>
            <Link to='/signup'>Signup</Link>
          </li>,
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  