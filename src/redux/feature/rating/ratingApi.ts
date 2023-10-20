"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";

import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const ratingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addRating: builder.mutation({
            query: (data) => ({
                url: '/rating/create-rating',
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags:["rating"]
        }),
        getRatings: builder.query({
            query: () => ({
                url: '/rating/get-ratings',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags:["rating"]
        }),
       
    })
})


export const {useAddRatingMutation, useGetRatingsQuery} = ratingApi;