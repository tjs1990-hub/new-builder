import Image from '../components/Image';
import { wrapper } from '../redux';
import Content from '../components/Content';
import SEO from '../components/SEO';
import ServicesCards from '../components/ServicesCards';
import { getPageData } from '../redux/actions/pages';
import { getNavItems } from '../redux/actions/navItems';
import { getServiceData } from '../redux/actions/services';
import { getHomePage } from '../redux/actions/homePage';
import { useSelector } from 'react-redux';
import GetQuote from '../components/widgets/getQuote';
import HorizontalCards from '../components/widgets/HorizontalCards';

export default function Home({ data }) {
  const homePage = useSelector((state) => state.homePage.frontpage);

  return (
    <>
      <div className="w-w-full relative h-h-50 z-20 mb-5">
        <SEO title={homePage.seotitle} />

        <Image
          image={homePage.mainImage.asset._ref}
          className="object-cover relative w-full h-full"
        />

        <div className="w-w-full h-h-full  absolute top-0 right-0 bg-gray-dark opacity-70 flex items-center justify-center "></div>
        <div className="w-w-full h-h-full  absolute top-0 right-0  flex items-center justify-center ">
          <h1 className="text-3xl text-center md:text-7xl text-white">
            {homePage.seotitle}
          </h1>
        </div>
      </div>

      <GetQuote />

      <div className="p-10 md:p-50 prose max-w-none  lg:p-40 ">
        <Content content={homePage.bodytop} />
      </div>

      <ServicesCards />

      <div className="p-10 md:p-50 prose max-w-none  lg:p-40 text-center">
        <Content content={homePage.body} />
      </div>

      <HorizontalCards />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    await store.dispatch(getHomePage());
    await store.dispatch(getServiceData());
    await store.dispatch(getNavItems());
    await store.dispatch(getPageData('home'));

    return {
      revalidate: 60
    };
  }
);
