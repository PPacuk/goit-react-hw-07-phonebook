import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setfilter(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setfilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
