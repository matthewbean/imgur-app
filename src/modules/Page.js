import React, { useContext, Fragment, useEffect } from 'react';
import ImageContext from '../context/image/imageContext';
import Image from './Image';

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
  if (data === null || data === []) {
    return <div>LOADING</div>;
  }
  return (
    <div className='main'>
      {data.map(item => (
        <Image item={item} />
      ))}
    </div>
  );
};

export default Page;
