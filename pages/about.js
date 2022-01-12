import wrapper from '../redux';
import { getPageData } from '../redux/actions/pages';
import { getNavItems } from '../redux/actions/navItems';

export default function About() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    ({ preview }) => {
      store.dispatch(getPageData('home'));
      store.dispatch(getNavItems());
      return {
        revalidate: 10
      };
    }
);
