import { combineReducers } from '@reduxjs/toolkit';
import blogReducer from '../features/blog/utils/blog.slice';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
