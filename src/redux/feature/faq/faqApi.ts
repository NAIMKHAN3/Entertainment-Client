import { apiSlice } from "@/redux/RootApi/apiSlice";

const faqApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFaq: builder.query({
            query: () => ({
                url: "/faq/get-faq",
            })
        }),
        getFaqById: builder.query({
            query: (id) => ({
                url: `/faq/get-faq-by-id/${id}`,
            })
        }),
        addFaq: builder.mutation({
            query: (data) => ({
                url: "/faq/create-faq",
                method: "POST",
                body: data
            })
        }),
        updateFaq: builder.mutation({
            query: (data) => ({
                url: `/faq/update-faq/${data.id}`,
                method: "PUT",
                body: data?.data
            })
        }),
        deleteFaq: builder.mutation({
            query: (id) => ({
                url: `/faq/delete-faq/${id}`,
                method: "DELETE",
            })
        }),
    })
})

export const {useAddFaqMutation, useGetFaqByIdQuery, useGetFaqQuery, useUpdateFaqMutation, useDeleteFaqMutation } = faqApi;