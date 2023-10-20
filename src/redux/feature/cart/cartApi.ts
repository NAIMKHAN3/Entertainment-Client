"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => ({
                url: "/cart/get-cart",
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["cart"]
        }),
        deleteCart: builder.mutation({
            query: (id) => ({
                url: `/cart/delete-cart/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["cart"]
        }),
        addCart: builder.mutation({
            query: (data) => ({
                url: "/cart/create-cart",
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["cart"]
        }),
    })
})

export const {useAddCartMutation, useGetCartQuery, useDeleteCartMutation} = cartApi;