import { axiosBaseQuery } from '@/axios/axios';
import { getInfoToLocal } from '@/share';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = getInfoToLocal('token')
const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://entertainment-movie-7zks3i5j5-naimkhan3.vercel.app/api/v1',
  prepareHeaders(headers) {
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
})
