"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userReg: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/create-user',
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/login-user',
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/auth/change-password',
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
        allUser: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-user',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["user"]
        }),
        getUserById: builder.query({
            query: (id) => ({
                method: 'GET',
                url: `/user/get-profile-by-id/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["user"]
        }),
        allAdmin: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-admin',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["user"]
        }),
        allSuperAdmin: builder.query({
            query: () => ({
                method: 'GET',
                url: '/super-admin/get-all-super-admin',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["user"]
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                method: 'PUT',
                url: `/user/update-profile/${data.id}`,
                body: data.body,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
    })
})

export const {useUserRegMutation, useChangePasswordMutation, useUpdateUserMutation, useGetUserByIdQuery, useUserLoginMutation,useAllUserQuery, useAllAdminQuery, useAllSuperAdminQuery} = authApi;