import * as React from 'react';
import { NextPage } from 'next';

import Blog from '../src/features/blog/page/Blog';
import { useSelector } from 'react-redux';
import { manageStateStart, selectValue } from '../src/features/blog/utils/blog.slice';
import { RootState } from '../src/app/rootReducer';

interface Props {
  custom: string;
}
const Index: NextPage<Props> = props => {
  const test = useSelector(selectValue);
  console.log(test);
  return <Blog />;
};

Index.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
  }
  store.dispatch(manageStateStart('Page'));
  return { custom: 'custom' };
};

export default Index;
