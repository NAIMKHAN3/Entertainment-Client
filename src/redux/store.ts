import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './RootApi/apiSlice'
import authSlice from './feature/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch