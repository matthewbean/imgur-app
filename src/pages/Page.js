import React, { useContext, useEffect } from 'react';
import ImageContext from '../context/image/imageContext';
import Image from '../modules/Image';
import Masonry from 'react-masonry-css';

const Page = () => {
  const imageContext = useContext(ImageContext);
  const { data, reload, setLoading } = imageContext;
  useEffect(() => {
    // Update the document title using the browser API
    setLoading();
    reload();
  }, []);
  //set breakpoints for columns
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    940: 2,
    640: 1
  };
  if (data === null || data === []) {
    return <div className='loading'>LOADING</div>;
  }
  return (
    <div className='main'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {data
          .filter((item, i) => i <= 100)
          .map(item => (
            <Image item={item} />
          ))}
      </Masonry>
    </div>
  );
};

export default Page;
