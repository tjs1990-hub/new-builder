import { getPageData } from '../actions/pages';
import { getNavItems } from '../actions/navItems';
import { wrapper } from '../index';

const dispatcher = (props) => {
  return (
    wrapper.store.dispatch(getNavItems()),
    wrapper.store.dispatch(getPageData('home'))
  );
};

export default dispatcher;
