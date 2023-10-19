import { apiSlice } from "@/redux/RootApi/apiSlice";

const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => ({
                url: "/cart/get-cart",
                method: "GET"
            })
        }),
        deleteCart: builder.mutation({
            query: (id) => ({
                url: `/cart/delete-cart/${id}`,
                method: "DELETE"
            })
        }),
        addCart: builder.mutation({
            query: (data) => ({
                url: "/cart/create-cart",
                method: "POST",
                body: data
            })
        }),
    })
})

export const {useAddCartMutation, useGetCartQuery, useDeleteCartMutation} = cartApi;