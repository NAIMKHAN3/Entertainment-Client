import { axiosBaseQuery } from '@/axios/axios';
import { createApi } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://entertainment-movie-qrvqu4md1-naimkhan3.vercel.app/api/v1' }),
  endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
