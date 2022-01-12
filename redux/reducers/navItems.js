import * as actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  navItems: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //   return {
    //     ...state.navItems,
    //     ...action.payload
    //   };
    case actionTypes.GET_NAV_ITEMS:
      return {
        ...state.navItems,
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;
