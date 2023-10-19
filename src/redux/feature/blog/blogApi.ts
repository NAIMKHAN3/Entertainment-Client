import { apiSlice } from "@/redux/RootApi/apiSlice";

const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: () => ({
                url: "/blog/get-blog",
            }),
            providesTags: ["blog"]
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: `/blog/get-blog-by-id/${id}`,
            }),
            providesTags: ["blog"]
        }),
        addBlog: builder.mutation({
            query: (data) => ({
                url: "/blog/create-blog",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["blog"]
        }),
        updateBlog: builder.mutation({
            query: (data) => ({
                url: `/blog/update-blog/${data.id}`,
                method: "PUT",
                body: data?.data
            }),
            invalidatesTags: ["blog"]
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blog/delete-blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blog"]
        }),
    })
})

export const {useAddBlogMutation, useGetBlogQuery, useGetBlogByIdQuery, useUpdateBlogMutation, useDeleteBlogMutation} = faqApi;