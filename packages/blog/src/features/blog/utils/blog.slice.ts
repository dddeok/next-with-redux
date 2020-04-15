import { createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from './../../../app/rootReducer';

export const manageStateStart = createAction('blog/manageStateStart', (value: string) => {
  return { payload: value };
});

interface InitialState {
  value: string;
}

const initialState: InitialState = {
  value: null,
};

const reducer = createReducer(initialState, {
  [manageStateStart.type]: (state, action) => {
    const value = action.payload;
    state.value = value;
  },
});

export default reducer;

export const selectValue = (state: RootState) => state.blog.value;
