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
       
    })
})


export const {useAddRatingMutation} = ratingApi;