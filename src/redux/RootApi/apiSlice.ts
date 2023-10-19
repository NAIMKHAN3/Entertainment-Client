"use client"
import {useEffect} from 'react'
import { axiosBaseQuery } from '@/axios/axios';
import { getInfoToLocal } from '@/share';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useAppSelector } from '../hooks/hooks';

let token = getInfoToLocal('token')
if(!token){
  token = getInfoToLocal('token')
}

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://entertainment-movie-8x5iz31b0-naimkhan3.vercel.app/api/v1',
  prepareHeaders(headers) {
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  tagTypes:["booking", "rating", "cart", "user", "blog","category", "cinema", "faq"]
})
