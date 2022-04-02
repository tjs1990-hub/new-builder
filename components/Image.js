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

const Image = (props) => {
  const imageProps = useNextSanityImage(configuredSanityClient, props.image);

  return (
    <>
      <Img {...imageProps} placeholder="blur" layout="fill" />
    </>
  );
};

export default Image;
