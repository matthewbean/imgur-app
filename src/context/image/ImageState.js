import React, { useReducer } from 'react';
import imageReducer from './imageReducer';
import ImageContext from './imageContext';
import { RELOAD, LOADING } from './types';

const ImageState = props => {
  const initialState = {
    data: [],
    LOADING: true
  };
  const [state, dispatch] = useReducer(imageReducer, initialState);

  //reload
  const reload = () => {
    console.log('reloaded');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID 5bf5749f2993b59');

    var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(
      'https://api.imgur.com/3/gallery/hot/top/week/1?showViral=true&mature=false&album_previews=true',
      requestOptions
    )
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res =>
        dispatch({
          type: RELOAD,
          payload: res.data
        })
      )
      .catch(error => console.log('error', error));
  };

  return (
    <ImageContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        reload
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
