import { axiosBaseQuery } from '@/axios/axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://entertainment-movie-7rx9icror-naimkhan3.vercel.app/api/v1' }),
  endpoints: () => ({}),
})

