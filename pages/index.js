import { useEffect } from 'react';
import Image from '../components/Image';
import wrapper from '../redux';
import Content from '../components/Content';
import ServicesCards from '../components/ServicesCards';
import { getPageData } from '../redux/actions/pages';
import { getNavItems } from '../redux/actions/navItems';
import { getServiceData } from '../redux/actions/services';
import { useSelector } from 'react-redux';

export default function Home({ data }) {
  const pages = useSelector((state) => state.pages);

  return (
    <>
      <h1>Home</h1>

      <ServicesCards />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ preview }) => {
      store.dispatch(getPageData('home'));
      store.dispatch(getNavItems());
      store.dispatch(getServiceData());
      return {
        revalidate: 60
      };
    }
);
