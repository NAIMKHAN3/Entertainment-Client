import { apiSlice } from "@/redux/RootApi/apiSlice";

const superAdminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createAdmit: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/super-admin/create-admin',
                body: data
            })
        }),
    updateUserRole: builder.mutation({
            query: (data) => ({
                method: 'PUT',
                url: `/super-admin/role-update/${data.id}`,
                body: {role: data.body}
            })
        }),
    deleteUser: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/super-admin/user-delete/${id}`,
            })
        }),
        
    })
})

export const {useCreateAdmitMutation,useDeleteUserMutation, useUpdateUserRoleMutation} = superAdminApi;