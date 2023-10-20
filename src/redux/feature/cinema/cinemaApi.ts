"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const cinameApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCinema: builder.query({
            query: (data) => ({
                url: `/cenema/get-cenema?page=${data?.page}&size=${data?.size}&search=${data?.search}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["cinema"]
        }),
        getCinemaByCategory: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-category`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["cinema"]
        }),
        getCinemaByLeatest: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-latest`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["cinema"]
        }),
        getCinemaByPopuler: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-random`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["cinema"]
        }),
        getCinemaById: builder.query({
            query: (id) => ({
                url: `/cenema/get-cenema-by-id/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["cinema", "rating"]
        }),
        addCinema: builder.mutation({
            query: (data) => ({
                url: "/cenema/create-cenema",
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["cinema"]
        }),
        updateCinema: builder.mutation({
            query: (data) => ({
                url: `/cenema/update-cenema/${data.id}`,
                method: "PUT",
                body: data?.data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["cinema"]
        }),
        deleteCinema: builder.mutation({
            query: (id) => ({
                url: `/cenema/delete-cenema/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["cinema"]
        }),
    })
})

export const {useGetCinemaQuery,useGetCinemaByCategoryQuery,useGetCinemaByPopulerQuery, useGetCinemaByLeatestQuery, useDeleteCinemaMutation, useUpdateCinemaMutation, useAddCinemaMutation, useGetCinemaByIdQuery } = cinameApi;