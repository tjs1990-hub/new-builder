import * as actionTypes from '../actions/actionTypes';

const initialState = {
  homePage: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_PAGE:
      return {
        ...state.homePage,
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;
