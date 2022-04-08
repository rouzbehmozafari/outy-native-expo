import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/general'
import themeSlice from './slices/themeSlice';
import userSlice from './slices/userSlice';
export const store = configureStore({
  reducer: {
    message: messageReducer,
    theme : themeSlice,
    user : userSlice
  }
});
export type RootState = ReturnType<typeof store.getState>