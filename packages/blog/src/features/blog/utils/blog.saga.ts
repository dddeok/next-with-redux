import { takeEvery, all, put, delay } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import Router from 'next/router';

import { manageStateStart, manageStateSuccess } from './blog.slice';
import { getHealthCheck } from './blog.api';
function* manageStateSaga(action: ReturnType<typeof manageStateStart>) {
  try {
    const result = yield call(getHealthCheck);
    yield put(manageStateSuccess(result));
  } catch {
    console.log('error');
  }
}

export function* watchBlog() {
  yield all([takeEvery(manageStateStart.type, manageStateSaga)]);
}
