"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const superAdminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createAdmit: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/super-admin/create-admin',
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
    updateUserRole: builder.mutation({
            query: (data) => ({
                method: 'PUT',
                url: `/super-admin/role-update/${data.id}`,
                body: {role: data.body},
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
    deleteUser: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/super-admin/user-delete/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["user"]
        }),
        
    })
})

export const {useCreateAdmitMutation,useDeleteUserMutation, useUpdateUserRoleMutation} = superAdminApi;