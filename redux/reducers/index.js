import { combineReducers } from 'redux';
import pages from './pages';
import navItems from './navItems';
import services from './services';
import homePage from './homePage';

const rootReducer = combineReducers({
  pages: pages,
  navItems: navItems,
  services: services,
  homePage: homePage
});

export default rootReducer;
