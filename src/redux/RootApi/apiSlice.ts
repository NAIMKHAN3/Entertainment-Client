import { axiosBaseQuery } from '@/axios/axios';
import { createApi } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://entertainment-movie-7rx9icror-naimkhan3.vercel.app/api/v1' }),
  endpoints: () => ({}),
})

