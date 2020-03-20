import React, { useEffect, useContext } from 'react';
import ImageContext from '../context/image/imageContext';
const Current = () => {
  const imageContext = useContext(ImageContext);
  const { current, loading } = imageContext;
  const { data } = current;

  // if (loading === true) {
  //   return <div className='loading'>LOADING</div>;
  // }

  return (
    <div className='album'>
      <div className='album-title'>{data.title}</div>
      {data.images.map(item =>
        item.type === 'video/mp4' ? (
          <video src={item.link} className='album-image' controls muted loop />
        ) : (
          <div>
            <img className='album-image' src={item.link} />
            <p className='album-description'>{item.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Current;
