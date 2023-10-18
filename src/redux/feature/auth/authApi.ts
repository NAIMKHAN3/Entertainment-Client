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
        changePassword: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/change-password',
                body: data
            })
        }),
        allUser: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-user'
            })
        }),
        getUserById: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `/user/get-profile-by-id/${id}`
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
        updateUser: builder.mutation({
            query: (data) => ({
                method: 'PUT',
                url: `/user/update-profile/${data.id}`,
                body: data.body
            })
        }),
    })
})

export const {useUserRegMutation, useChangePasswordMutation, useUpdateUserMutation, useGetUserByIdQuery, useUserLoginMutation,useAllUserQuery, useAllAdminQuery, useAllSuperAdminQuery} = authApi;