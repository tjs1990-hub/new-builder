import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity.server';
import { getNavItems } from '../redux/actions/navItems';
import { getServiceData } from '../redux/actions/services';
import { getHomePage } from '../redux/actions/homePage';
import { wrapper } from '../redux';
import Image from '../components/Image';
import Content from '../components/Content';
import ServicesCards from '../components/ServicesCards';
import HorizontalCards from '../components/widgets/HorizontalCards';

export const getStaticPaths = async () => {
  const query = groq`*[_type == "page"]`;

  const pages = await getClient().fetch(query);

  const paths = Object.keys(pages).map((key) => {
    const page = pages[key];

    return {
      params: { slug: page.slug.current }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    await store.dispatch(getHomePage());
    await store.dispatch(getServiceData());
    await store.dispatch(getNavItems());

    const { slug = '' } = context.params;

    const data = await getClient().fetch(
      `
  *[_type == "page" && slug.current == $slug][0]
`,
      { slug }
    );

    return {
      props: { page: data },
      revalidate: 60
    };
  }
);

export default function pageTemplate({ page }) {
  return (
    <>
      <div className='h-h-50 relative'>
      <Image image={page.mainImage.asset._ref} />
      </div>
      <h1 className="font-medium text-4xl p-4 text-center">{page.title}</h1>
      <div className="p-10 text-center">
        <Content content={page.body} />
      </div>

      <HorizontalCards />
      <ServicesCards />
    </>
  );
}
