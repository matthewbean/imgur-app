import { RELOAD, LOAD_ALBUM, EXIT_FULLSCREEN, SET_LOADING } from './types';

export default (state, action) => {
  switch (action.type) {
    case RELOAD:
      return {
        ...state,
        data: action.payload,
        loading: false
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
        fullscreen: true,
        loading: false
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
