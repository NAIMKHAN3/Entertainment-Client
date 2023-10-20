
import { apiSlice } from "@/redux/RootApi/apiSlice";


const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFaq: builder.query({
            query: () => ({
                url: "/faq/get-faq",
                 
            }),
            providesTags: ["faq"]
        }),
        getFaqById: builder.query({
            query: (id) => ({
                url: `/faq/get-faq-by-id/${id}`,
                 
            }),
            providesTags: ["faq"]
        }),
        addFaq: builder.mutation({
            query: (data) => ({
                url: "/faq/create-faq",
                method: "POST",
                body: data,
                 
            }),
            invalidatesTags: ["faq"]
        }),
        updateFaq: builder.mutation({
            query: (data) => ({
                url: `/faq/update-faq/${data.id}`,
                method: "PUT",
                body: data?.data,
                 
            }),
            invalidatesTags: ["faq"]
        }),
        deleteFaq: builder.mutation({
            query: (id) => ({
                url: `/faq/delete-faq/${id}`,
                method: "DELETE",
                 
            }),
            invalidatesTags: ["faq"]
        }),
    })
})

export const {useAddFaqMutation, useGetFaqByIdQuery, useGetFaqQuery, useUpdateFaqMutation, useDeleteFaqMutation } = faqApi;