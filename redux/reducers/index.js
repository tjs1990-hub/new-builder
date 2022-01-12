import { combineReducers } from 'redux';
import pages from './pages';
import navItems from './navItems';
import services from './services';

const rootReducer = combineReducers({
  pages: pages,
  navItems: navItems,
  services: services
});

export default rootReducer;
