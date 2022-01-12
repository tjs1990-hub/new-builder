import React from 'react';
import wrapper from '../redux';
import App from 'next/app';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(MyApp);
