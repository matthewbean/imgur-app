import {
  RELOAD,
  LOAD_ALBUM,
  EXIT_FULLSCREEN,
  SET_LOADING,
  CLEAR_PAGE,
  LOAD_COMMENTS
} from './types';

export default (state, action) => {
  switch (action.type) {
    case RELOAD:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case CLEAR_PAGE:
      return {
        ...state,
        data: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOAD_ALBUM:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case EXIT_FULLSCREEN:
      return {
        ...state,
        current: null,
        fullscreen: false,
        loading: false
      };
    default:
      return state;
  }
};
