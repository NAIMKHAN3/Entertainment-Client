import { apiSlice } from "@/redux/RootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userReg: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/create-user',
                body: data
            })
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/login-user',
                body: data
            })
        }),
        allUser: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-user'
            })
        }),
        allAdmin: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-admin'
            })
        }),
        allSuperAdmin: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-super-admin'
            })
        }),
    })
})

export const {useUserRegMutation, useUserLoginMutation,useAllUserQuery, useAllAdminQuery, useAllSuperAdminQuery} = authApi;