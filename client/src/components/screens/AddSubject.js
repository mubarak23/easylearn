import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const AddSubject = () => {
  const history = useHistory();
  const [name, SetName] = useState('');
  const [content, SetContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const postSubject = () => {
    fetch('/subject', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        content: content,
        image_url: imageUrl,
        video_url: videoUrl,
        other_url: videoUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({
          html: 'Subject Added Successfully',
          classes: '#43a047 green darken-1',
        });
        history.push('/home');
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
      <h3>Add Subject</h3>
      <input
        type='text'
        value={name}
        onChange={(e) => SetName(e.target.value)}
        placeholder='Name'
      />
      <textarea
        id='textarea1'
        className='materialize-textarea'
        rows='60px'
        column='40px'
        type='text'
        value={content}
        onChange={(e) => SetContent(e.target.value)}
        placeholder='Content'
      />
      <input
        type='text'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder='Image URL'
      />
      <input
        type='text'
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder='Video URL'
      />
      <button
        onClick={() => postSubject()}
        className='btn waves-effect waves-light #64b5f6 blue darken-1'
      >
        Add Subject
      </button>
    </div>
  );
};

export default AddSubject;
