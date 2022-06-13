import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const inputBarSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setInputValue } = inputBarSlice.actions;

export default inputBarSlice.reducer;
