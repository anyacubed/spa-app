import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataSlice';
import pageReducer from './reducers/pageSlice';
import inputBarReducer from './reducers/inputBarSlice';

export const store = configureStore({
  reducer: {
    dataReducer,
    pageReducer,
    inputBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
