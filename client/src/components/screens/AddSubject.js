import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const AddSubject = () => {
  const history = useHistory();
  const [name, SetName] = useState('');
  const [content, SetContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const postSubject = () => {
    fetch('/addsubject', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content,
        imageUrl,
        videoUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: '#c62828 red darken-3' });
        } else {
          M.toast({
            html: 'Subject Added Successfully',
            classes: '#43a047 green darken-1',
          });
          history.push('/');
        }
      });
  };

  return (
    <div
      className='card input-field'
      style={{
        margin: '10px auto',
        maxWidth: '500px',
        padding: '20px',
        textAlign: 'center',
        marginTop: '30px',
      }}
    >
      <input
        type='text'
        value={name}
        onChange={(e) => SetName(e.target.value)}
        placeholder='Name'
      />
      <textarea
        rows='30px'
        column='40px'
        type='text'
        value={content}
        onChange={(e) => SetBody(e.target.value)}
        placeholder='Content'
      />
      <input
        type='text'
        value={imageUrl}
        onChange={(e) => SetName(e.target.value)}
        placeholder='Image URL'
      />
      <input
        type='text'
        value={videoUrl}
        onChange={(e) => SetName(e.target.value)}
        placeholder='Video URL'
      />
      <button
        onClick={() => postSubject()}
        className='btn waves-effect waves-light #64b5f6 blue darken-1'
      >
        Submit Post
      </button>
    </div>
  );
};

export default AddSubject;
