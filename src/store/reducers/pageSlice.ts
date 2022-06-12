import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentPage } from '../../interfaces/interfaces';

const initialState: CurrentPage = {
  currentPage: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;