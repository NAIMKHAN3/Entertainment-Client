import { apiSlice } from "@/redux/RootApi/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: "/category/get-category",
                method: "GET"
            })
        }),
        addCateogry: builder.mutation({
            query: (data) => ({
                url: "/category/create-category",
                method: "POST",
                data: data
            })
        }),
    })
})

export const {useGetCategoryQuery, useAddCateogryMutation} = categoryApi;