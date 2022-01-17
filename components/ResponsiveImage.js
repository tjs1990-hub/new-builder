import Img from 'next/image';
import sanityClient from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';
import { config } from '../lib/config';

const configuredSanityClient = sanityClient({
  projectId: 'in87qmo0',
  dataset: 'dev',
  useCdn: true,
  apiVersion: '2021-12-17'
});

const ResponsiveImage = (props) => {
  const imageProps = useNextSanityImage(configuredSanityClient, props.image);

  return (
    <>
      <Img {...imageProps} layout='intrinsic' placeholder="blur" />
    </>
  );
};

export default ResponsiveImage;
