"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: () => ({
                url: "/blog/get-blog",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["blog"]
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: `/blog/get-blog-by-id/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["blog"]
        }),
        addBlog: builder.mutation({
            query: (data) => ({
                url: "/blog/create-blog",
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["blog"]
        }),
        updateBlog: builder.mutation({
            query: (data) => ({
                url: `/blog/update-blog/${data.id}`,
                method: "PUT",
                body: data?.data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["blog"]
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blog/delete-blog/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["blog"]
        }),
    })
})

export const {useAddBlogMutation, useGetBlogQuery, useGetBlogByIdQuery, useUpdateBlogMutation, useDeleteBlogMutation} = faqApi;