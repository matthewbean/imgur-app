import React, { useContext, Fragment, useEffect } from 'react';
import ImageContext from '../context/image/imageContext';
import Image from './Image';
import Masonry from 'react-masonry-css';

const Page = () => {
  const imageContext = useContext(ImageContext);
  const { data, reload } = imageContext;
  const refresh = () => {
    console.log('done');
    reload();
  };
  useEffect(() => {
    // Update the document title using the browser API
    reload();
  }, []);
  //set breakpoints for columns
  const breakpointColumnsObj = {
    default: 4,
    1360: 3,
    1020: 2,
    680: 1
  };
  if (data === null || data === []) {
    return <div>LOADING</div>;
  }
  return (
    <div className='main'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {data.map(item => (
          <Image item={item} />
        ))}
      </Masonry>
    </div>
  );
};

export default Page;
