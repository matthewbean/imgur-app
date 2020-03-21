import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import ImageContext from '../context/image/imageContext';
const views = require('../assets/icons/eye.svg');
const upvote = require('../assets/icons/up-arrow.svg');

const Image = ({ item }) => {
  const imageContext = useContext(ImageContext);
  const { loadAlbum, setLoading, loadComments } = imageContext;
  const openAlbum = () => {
    setLoading();
    loadComments(item.id);
    loadAlbum(item.id);
  };
  if (!item.images) {
    return <Fragment></Fragment>;
  }
  if (item.images[0].type === 'video/mp4') {
    return (
      <div class='box'>
        <div className='title'>
          <div className='text'>{item.title}</div>
        </div>
        <Link to='/post' onClick={openAlbum} className='container'>
          <video
            src={item.images[0].link}
            className='picture'
            controls
            muted
            loop
          />
        </Link>
        <div className='upvote'>
          <div className='icon baseline'>
            <img className='eye' src={views} />
          </div>
          {item.views}
        </div>
        <div className='downvote'>
          <div className='icon baseline'>
            <img className='eye' src={upvote} />
          </div>
          {item.score}
        </div>
      </div>
    );
  }
  return (
    <div class='box'>
      <div className='title'>
        <div className='text'>{item.title}</div>
      </div>
      <Link to='/post' onClick={openAlbum} className='container'>
        <img src={item.images[0].link} className='picture' />
      </Link>
      <div className='upvote'>
        <div className='icon baseline'>
          <img className='eye' src={views} />
        </div>
        {item.views}
      </div>
      <div className='downvote'>
        <div className='icon baseline'>
          <img className='eye' src={upvote} />
        </div>
        {item.score}
      </div>
    </div>
  );
};

export default Image;
