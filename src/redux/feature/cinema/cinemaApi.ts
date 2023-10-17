import { apiSlice } from "@/redux/RootApi/apiSlice";

const cinameApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: "/category/get-category",
                method: "GET"
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

export const {useGetCategoryQuery, useAddCinemaMutation } = cinameApi;