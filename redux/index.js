import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const store = createStore(reducer, {}, bindMiddleware([thunkMiddleware]));

const initStore = () => {
  return store;
};

export const wrapper = createWrapper(initStore);
