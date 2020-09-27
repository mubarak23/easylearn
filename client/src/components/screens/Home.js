import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { studentContext } from '../../App';

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(studentContext);
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

  const takeSubject = (id) => {
    console.log(state._id);
    fetch(`/take/subject/:${state._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        studentId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='home'>
      {data.map((item) => {
        return (
          <div className='card  home-card' key={item._id}>
            <h5 style={{ padding: '5px' }}>
              <Link to='/profile'>{item.name}</Link>
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
              <div>
                <button
                  style={{
                    margin: '5px',
                  }}
                  className='btn waves-effect waves-light #64b5f6 blue darken-1'
                  onClick={() => takeSubject(item._id)}
                >
                  Take Subject
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
