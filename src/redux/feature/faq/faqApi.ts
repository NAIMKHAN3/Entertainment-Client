"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";

import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFaq: builder.query({
            query: () => ({
                url: "/faq/get-faq",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["faq"]
        }),
        getFaqById: builder.query({
            query: (id) => ({
                url: `/faq/get-faq-by-id/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["faq"]
        }),
        addFaq: builder.mutation({
            query: (data) => ({
                url: "/faq/create-faq",
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["faq"]
        }),
        updateFaq: builder.mutation({
            query: (data) => ({
                url: `/faq/update-faq/${data.id}`,
                method: "PUT",
                body: data?.data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["faq"]
        }),
        deleteFaq: builder.mutation({
            query: (id) => ({
                url: `/faq/delete-faq/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["faq"]
        }),
    })
})

export const {useAddFaqMutation, useGetFaqByIdQuery, useGetFaqQuery, useUpdateFaqMutation, useDeleteFaqMutation } = faqApi;