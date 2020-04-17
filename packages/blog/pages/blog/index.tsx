import * as React from 'react';
import { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Blog from '../../src/features/blog/page/Blog';
import { useSelector } from 'react-redux';
import { manageStateStart, selectValue } from '../../src/features/blog/utils/blog.slice';

import { getHealthCheck } from '../../src/features/blog/utils/blog.api';
interface Props {
  custom: any;
}
const Index: NextPage<Props> = props => {
  const test = useSelector(selectValue);

  return test ? (
    <Fragment>
      <NextSeo title={test} />
      <Blog title={test} />
    </Fragment>
  ) : null;
};

Index.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
    console.log('This is Sever');
  }
  store.dispatch(manageStateStart('Value'));
  return { custom: 'custom' };
};

export default Index;
