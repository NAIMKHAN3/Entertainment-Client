import { apiSlice } from "@/redux/RootApi/apiSlice";

const ratingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addRating: builder.mutation({
            query: (data) => ({
                url: '/rating/create-rating',
                method: "POST",
                body: data
            })
        }),
        getRatings: builder.query({
            query: () => ({
                url: '/rating/get-ratings',
            })
        }),
       
    })
})


export const {useAddRatingMutation, useGetRatingsQuery} = ratingApi;