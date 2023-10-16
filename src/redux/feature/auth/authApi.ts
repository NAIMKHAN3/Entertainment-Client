import { apiSlice } from "@/redux/RootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userReg: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/create-user',
                data: data
            })
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/login-user',
                data: data
            })
        }),
        allUser: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-user'
            })
        }),
    })
})

export const {useUserRegMutation, useUserLoginMutation,useAllUserQuery} = authApi;