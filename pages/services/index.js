import wrapper from '../../redux';
import { getPageData } from '../../redux/actions/pages';
import { getNavItems } from '../../redux/actions/navItems';

export default function Services() {
  return (
    <>
      <h1>Services</h1>
    </>
  );
}

// export const getStaticProps = wrapper.getStaticProps(
//   (store) =>
//     ({ preview }) => {
//       store.dispatch(getPageData('home'));
//       store.dispatch(getNavItems());
//       return {
//         revalidate: 10
//       };
//     }
// );
