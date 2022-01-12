import * as actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  pages: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.GET_ALL_PAGES:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;
