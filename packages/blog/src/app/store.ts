import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { RootState } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const createStore = preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, ...getDefaultMiddleware()],
    preloadedState,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
