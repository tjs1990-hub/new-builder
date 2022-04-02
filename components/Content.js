import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../lib/serializers';

const Content = (props) => (
  <BlockContent blocks={props.content} serializers={serializers} />
);

export default Content;
