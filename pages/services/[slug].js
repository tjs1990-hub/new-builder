import { wrapper } from '../../redux';
import { getServiceData } from '../../redux/actions/services';
import { getNavItems } from '../../redux/actions/navItems';
import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import {useRouter} from 'next/router'
import Image from '../../components/Image';
import SEO from '../../components/SEO';
import Content from '../../components/Content';
import HorizontalCards from '../../components/widgets/HorizontalCards';
import ServicesCards from '../../components/ServicesCards';


export const getStaticPaths = async () => {
  const query = groq`*[_type == "services"]`;

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
   
    await store.dispatch(getServiceData());
    await store.dispatch(getNavItems());

    const { slug = '' } = context.params;

    const data = await getClient().fetch(
      `
  *[_type == "services" && slug.current == $slug][0]
`,
      { slug }
    );



    return {
      props: { page: data },
      revalidate: 60
    };
  }
);




export default function Services({page}) {



  return(
    <>
    <div className="w-w-full relative h-h-50 z-20 mb-5">
        <SEO title={page.seotitle} description={page.seodesc}/>

        <Image
          image={page.mainImage.asset._ref}
          className="object-cover relative w-full h-full"
        />

        <div className="w-w-full h-h-full  absolute top-0 right-0 bg-gray-dark opacity-70 flex items-center justify-center "></div>
        <div className="w-w-full h-h-full  absolute top-0 right-0  flex items-center justify-center ">
          <h1 className="text-3xl text-center md:text-7xl text-white">
            {page.title}
          </h1>
        </div>
      </div>

      <div className='p-10 md:p-50 prose max-w-none  lg:p-40'>
      <Content content={page.body}/>
      </div>

  

      <HorizontalCards />



   
  
    </>
  )
}