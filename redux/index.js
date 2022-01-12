import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducers/pages';

const middleware = [thunkMiddleware];

const initialState = {
  pages: {},
  navItems: {},
  services: {}
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const initStore = () => {
  return store;
};

const wrapper = createWrapper(initStore, { debug: true });

export default wrapper;
