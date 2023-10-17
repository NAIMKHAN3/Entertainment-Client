import { apiSlice } from "@/redux/RootApi/apiSlice";

const cinameApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCinema: builder.query({
            query: () => ({
                url: "/cenema/get-cenema",
            })
        }),
        addCinema: builder.mutation({
            query: (data) => ({
                url: "/cenema/create-cenema",
                method: "POST",
                body: data
            })
        }),
    })
})

export const {useGetCinemaQuery, useAddCinemaMutation } = cinameApi;