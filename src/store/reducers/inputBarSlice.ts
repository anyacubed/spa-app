import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InputI } from '../../interfaces/interfaces';

const initialState: InputI = {
  inputValue: '',
};

export const inputBarSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = inputBarSlice.actions;

export default inputBarSlice.reducer;
