import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';  // authSlice.reducer is being imported as authReducer, you can rename it

// Create and configure Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Type for RootState (used for type-checking `useSelector`)
export type RootState = ReturnType<typeof store.getState>;

export default store;
