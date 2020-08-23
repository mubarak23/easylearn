import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
//import { userContext } from '../../App';

const Home = () => {
  const [data, setData] = useState([]);
  //const { state, dispatch } = useContext(userContext);
  useEffect(() => {
    fetch('/subject', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      });
  }, []);
  return (
    <div className='home'>
      <div className='card  home-card'>
        <h5 style={{ padding: '5px' }}>
          <Link to='/profile'>Subject I</Link>
        </h5>
        <div className='card-image'>
          <img
            style={{
              height: '100px',
              width: '100px',
            }}
            src={avatar}
          />
        </div>
        <div className='card-content'>
          <div>Subject I Subject I Subject I Subject I</div>
          <Link to='/home'>Read More</Link>
          <div>
            <i className='material-icons'>favorite</i>
            Taken By: 15
          </div>
        </div>
      </div>

      <div className='card  home-card'>
        <h5 style={{ padding: '5px' }}>
          <Link to='/profile'>Subject II</Link>
        </h5>
        <div className='card-image'>
          <img
            style={{
              height: '100px',
              width: '100px',
            }}
            src={avatar}
          />
        </div>
        <div className='card-content'>
          <div>Subject I Subject I Subject I Subject I</div>
          <Link to='/home'>Read More</Link>
          <div>
            <i className='material-icons'>favorite</i>
            Taken By: 20
          </div>
        </div>
      </div>

      <div className='card  home-card'>
        <h5 style={{ padding: '5px' }}>
          <Link to='/profile'>Subject III</Link>
        </h5>
        <div className='card-image'>
          <img
            style={{
              height: '100px',
              width: '100px',
            }}
            src={avatar}
          />
        </div>
        <div className='card-content'>
          <div>Subject I Subject I Subject I Subject I</div>
          <Link to='/home'>Read More</Link>
          <div>
            <i className='material-icons'>favorite</i>
            Taken By: 15
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
