import { apiSlice } from "@/redux/RootApi/apiSlice";

const cinameApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCinema: builder.query({
            query: (data) => ({
                url: `/cenema/get-cenema?page=${data?.page}&size=${data?.size}&search=${data?.search}`,
            }),
            providesTags: ["cinema"]
        }),
        getCinemaByCategory: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-category`,
            }),
            providesTags: ["cinema"]
        }),
        getCinemaByLeatest: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-latest`,
            }),
            providesTags: ["cinema"]
        }),
        getCinemaByPopuler: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-random`,
            }),
            providesTags: ["cinema"]
        }),
        getCinemaById: builder.query({
            query: (id) => ({
                url: `/cenema/get-cenema-by-id/${id}`,
            }),
            providesTags: ["cinema", "rating"]
        }),
        addCinema: builder.mutation({
            query: (data) => ({
                url: "/cenema/create-cenema",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["cinema"]
        }),
        updateCinema: builder.mutation({
            query: (data) => ({
                url: `/cenema/update-cenema/${data.id}`,
                method: "PUT",
                body: data?.data
            }),
            invalidatesTags: ["cinema"]
        }),
        deleteCinema: builder.mutation({
            query: (id) => ({
                url: `/cenema/delete-cenema/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["cinema"]
        }),
    })
})

export const {useGetCinemaQuery,useGetCinemaByCategoryQuery,useGetCinemaByPopulerQuery, useGetCinemaByLeatestQuery, useDeleteCinemaMutation, useUpdateCinemaMutation, useAddCinemaMutation, useGetCinemaByIdQuery } = cinameApi;