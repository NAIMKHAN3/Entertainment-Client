import { apiSlice } from "@/redux/RootApi/apiSlice";

const superAdminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createAdmit: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/super-admin/create-admin',
                body: data
            }),
            invalidatesTags: ["user"]
        }),
    updateUserRole: builder.mutation({
            query: (data) => ({
                method: 'PUT',
                url: `/super-admin/role-update/${data.id}`,
                body: {role: data.body}
            }),
            invalidatesTags: ["user"]
        }),
    deleteUser: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/super-admin/user-delete/${id}`,
            }),
            invalidatesTags: ["user"]
        }),
        
    })
})

export const {useCreateAdmitMutation,useDeleteUserMutation, useUpdateUserRoleMutation} = superAdminApi;