import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './RootApi/apiSlice'
import authSlice from './feature/auth/authSlice'
import sidebarSlice from './feature/dashboard/sidebarSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch