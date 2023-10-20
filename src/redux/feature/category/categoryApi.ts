"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: "/category/get-category",
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["category"]
        }),
        getCategoryById: builder.query({
            query: (id) => ({
                url: `/category/get-category-by-id/${id}`,
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["category"]
        }),
        addCateogry: builder.mutation({
            query: (data) => ({
                url: "/category/create-category",
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["category"]
        }),
        updateCateogry: builder.mutation({
            query: (data) => ({
                url: `/category/update-category/${data.id}`,
                method: "PUT",
                body: data.data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["category"]
        }),
        deleteCateogry: builder.mutation({
            query: (id) => ({
                url: `/category/delete-category/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["category"]
        }),
    })
})

export const {useGetCategoryQuery, useDeleteCateogryMutation, useUpdateCateogryMutation, useGetCategoryByIdQuery, useAddCateogryMutation} = categoryApi;