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
        setData(result.subjects);
        console.log(result.subjects);
      });
  }, []);
  return (
    <div className='home'>
    {data.map((item) => {
      return (
          <div className='card  home-card' key={item._id} >
        <h5 style={{ padding: '5px' }}>
          <Link to='/profile'>{ item.name}</Link>
        </h5>
        <div className='card-image'>
          <img
            style={{
              height: '100px',
              width: '100px',
            }}
            src={item.image_url}
          />
        </div>
        <div className='card-content'>
          <div>{item.content}</div>
          <Link to='/home'>Read More</Link>
          <div>
            <i className='material-icons'>favorite</i>
            Taken By: {item.students}
          </div>
        </div>
      </div>
        )
      

    })}

      
    </div>
  );
};

export default Home;
