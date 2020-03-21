import React, { useContext } from 'react';
import ImageContext from '../context/image/imageContext';
import Comments from '../modules/Comments';

const Current = () => {
  const imageContext = useContext(ImageContext);
  const { current, loading } = imageContext;

  if (loading === true) {
    return <div className='loading'>LOADING</div>;
  }

  return (
    <div className='album-page'>
      <div className='album'>
        <div className='album-title'>{current.title}</div>
        {current.images.map(item =>
          item.type === 'video/mp4' ? (
            <div key={item.id}>
              <video
                src={item.link}
                key={item.id}
                className='album-image'
                controls
                muted
                loop
              />
              <p className='album-description'>{item.description}</p>
            </div>
          ) : (
            <div key={item.id}>
              <img className='album-image' alt='missing item' src={item.link} />
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
