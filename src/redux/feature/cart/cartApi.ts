import { apiSlice } from "@/redux/RootApi/apiSlice";

const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: "/category/get-category",
                method: "GET"
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

export const {useAddCartMutation} = cartApi;