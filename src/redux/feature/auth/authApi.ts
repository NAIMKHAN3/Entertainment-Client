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
    })
})

export const {useUserRegMutation, useUserLoginMutation} = authApi;