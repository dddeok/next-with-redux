import { fork } from 'redux-saga/effects';

import { watchBlog } from '../features/blog/utils/blog.saga';
export default function* rootSaga() {
  yield fork(watchBlog);
}
