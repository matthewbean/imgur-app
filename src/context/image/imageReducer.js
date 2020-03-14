import { RELOAD, LOADING } from './types';

export default (state, action) => {
  switch (action.type) {
    case RELOAD:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
