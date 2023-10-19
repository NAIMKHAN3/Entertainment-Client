import { apiSlice } from "@/redux/RootApi/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: "/category/get-category",
                method: "GET"
            })
        }),
        getCategoryById: builder.query({
            query: (id) => ({
                url: `/category/get-category-by-id/${id}`,
                method: "GET"
            })
        }),
        addCateogry: builder.mutation({
            query: (data) => ({
                url: "/category/create-category",
                method: "POST",
                body: data
            })
        }),
        updateCateogry: builder.mutation({
            query: (data) => ({
                url: `/category/update-category/${data.id}`,
                method: "PUT",
                body: data.data
            })
        }),
        deleteCateogry: builder.mutation({
            query: (id) => ({
                url: `/category/delete-category/${id}`,
                method: "DELETE",
            })
        }),
    })
})

export const {useGetCategoryQuery, useDeleteCateogryMutation, useUpdateCateogryMutation, useGetCategoryByIdQuery, useAddCateogryMutation} = categoryApi;