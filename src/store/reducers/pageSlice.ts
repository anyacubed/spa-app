import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number = 1;

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;