import React, { useEffect, useContext } from 'react';
import ImageContext from '../context/image/imageContext';
const Current = () => {
  const imageContext = useContext(ImageContext);
  const { current, loading } = imageContext;

  if (loading === true) {
    return <div className='loading'>LOADING</div>;
  }

  return (
    <div className='album'>
      {current.map(item =>
        item.type === 'video/mp4' ? (
          <video src={item.link} className='album-image' controls muted loop />
        ) : (
          <img className='album-image' src={item.link} />
        )
      )}
    </div>
  );
};

export default Current;
