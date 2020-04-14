import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { RootState } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});
sagaMiddleware.run(rootSaga);

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
