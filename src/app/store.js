import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice'

export const store = configureStore({
  reducer: {
    authProvider: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),});
