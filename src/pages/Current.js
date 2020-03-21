import React, { useEffect, useContext } from 'react';
import ImageContext from '../context/image/imageContext';
import Comments from './Comments';

const Current = () => {
  const imageContext = useContext(ImageContext);
  const { current, loading } = imageContext;

  if (loading === true) {
    return <div className='loading'>LOADING</div>;
  }

  return (
    <div class='album-page'>
      <div className='album'>
        <div className='album-title'>{current.title}</div>
        {current.images.map(item =>
          item.type === 'video/mp4' ? (
            <video
              src={item.link}
              className='album-image'
              controls
              muted
              loop
            />
          ) : (
            <div>
              <img className='album-image' src={item.link} />
              <p className='album-description'>{item.description}</p>
            </div>
          )
        )}
      </div>
      <Comments />
    </div>
  );
};

export default Current;
