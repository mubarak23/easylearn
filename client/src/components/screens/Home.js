import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
//import { userContext } from '../../App';

const Home = () => {
  return (
    <div className='home'>
      <div className='card  home-card'>
        <h5 style={{ padding: '5px' }}>
          <Link to='/profile'>Subject I</Link>
        </h5>
        <div className='card-image'></div>
      </div>
    </div>
  );
};

export default Home;
