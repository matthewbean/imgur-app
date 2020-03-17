import React, { useReducer } from 'react';
import imageReducer from './imageReducer';
import ImageContext from './imageContext';
import { RELOAD, LOAD_ALBUM, SET_LOADING } from './types';

const ImageState = props => {
  const initialState = {
    data: [],
    loading: true,
    current: null
  };
  const [state, dispatch] = useReducer(imageReducer, initialState);

  //reload
  const reload = () => {
    console.log('reloaded');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID 5bf5749f2993b59');

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
  //start loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  //load album
  const loadAlbum = id => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Client-ID 5bf5749f2993b59');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://api.imgur.com/3/album/${id}/images`, requestOptions)
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res =>
        dispatch({
          type: LOAD_ALBUM,
          payload: res.data
        })
      );
  };

  return (
    <ImageContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        current: state.current,
        reload,
        loadAlbum,
        setLoading
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
