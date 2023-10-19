import { apiSlice } from "@/redux/RootApi/apiSlice";

const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: () => ({
                url: "/blog/get-blog",
            })
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: `/blog/get-blog-by-id/${id}`,
            })
        }),
        addBlog: builder.mutation({
            query: (data) => ({
                url: "/blog/create-blog",
                method: "POST",
                body: data
            })
        }),
        updateBlog: builder.mutation({
            query: (data) => ({
                url: `/blog/update-blog/${data.id}`,
                method: "PUT",
                body: data?.data
            })
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blog/delete-blog/${id}`,
                method: "DELETE",
            })
        }),
    })
})

export const {useAddBlogMutation, useGetBlogQuery, useGetBlogByIdQuery, useUpdateBlogMutation, useDeleteBlogMutation} = faqApi;