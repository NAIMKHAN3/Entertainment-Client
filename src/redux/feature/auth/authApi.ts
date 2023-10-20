import { apiSlice } from "@/redux/RootApi/apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userReg: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/create-user',
                body: data
            }),
            invalidatesTags: ["user"]
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/login-user',
                body: data,
                 
            }),
            invalidatesTags: ["user"]
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/change-password',
                body: data,
                 
            }),
            invalidatesTags: ["user"]
        }),
        allUser: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-user',
                 
            }),
            providesTags: ["user"]
        }),
        getUserById: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `/user/get-profile-by-id/${id}`,
                 
            }),
            providesTags: ["user"]
        }),
        allAdmin: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-admin',
                 
            }),
            providesTags: ["user"]
        }),
        allSuperAdmin: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-super-admin',
                 
            }),
            providesTags: ["user"]
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                method: 'PUT',
                url: `/user/update-profile/${data.id}`,
                body: data.body,
                 
            }),
            invalidatesTags: ["user"]
        }),
    })
})

export const {useUserRegMutation, useChangePasswordMutation, useUpdateUserMutation, useGetUserByIdQuery, useUserLoginMutation,useAllUserQuery, useAllAdminQuery, useAllSuperAdminQuery} = authApi;