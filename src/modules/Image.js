import React, { useContext, Fragment } from 'react';
const views = require('../assets/icons/eye.svg');
const upvote = require('../assets/icons/up-arrow.svg');

const Image = ({ item }) => {
  if (!item.images) {
    return <Fragment></Fragment>;
  }
  if (item.images[0].type === 'video/mp4') {
    return (
      <div class='box'>
        <div className='title'>
          <div className='text'>{item.title}</div>
        </div>
        <a href={item.link} className='container'>
          <video
            src={item.images[0].link}
            className='picture'
            controls
            muted
            loop
          />
        </a>
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
      <a href={item.link} className='container'>
        <img src={item.images[0].link} className='picture' />
      </a>
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
