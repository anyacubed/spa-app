import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponseData } from '../../interfaces/interfaces';

const initialState: ApiResponseData[] = [];

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ApiResponseData[]>) => {
      return action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;