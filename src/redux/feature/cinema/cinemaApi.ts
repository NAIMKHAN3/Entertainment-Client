import { apiSlice } from "@/redux/RootApi/apiSlice";

const cinameApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCinema: builder.query({
            query: (data) => ({
                url: `/cenema/get-cenema?page=${data.page}&size=${data.size}&search=${data.search}`,
            })
        }),
        getCinemaByCategory: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-category`,
            })
        }),
        getCinemaByLeatest: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-latest`,
            })
        }),
        getCinemaByPopuler: builder.query({
            query: () => ({
                url: `/cenema/get-cenema-by-random`,
            })
        }),
        getCinemaById: builder.query({
            query: (id) => ({
                url: `/cenema/get-cenema-by-id/${id}`,
            }),
            providesTags: ["rating"]
        }),
        addCinema: builder.mutation({
            query: (data) => ({
                url: "/cenema/create-cenema",
                method: "POST",
                body: data
            })
        }),
        updateCinema: builder.mutation({
            query: (data) => ({
                url: `/cenema/update-cenema/${data.id}`,
                method: "PUT",
                body: data?.data
            })
        }),
        deleteCinema: builder.mutation({
            query: (id) => ({
                url: `/cenema/delete-cenema/${id}`,
                method: "DELETE",
            })
        }),
    })
})

export const {useGetCinemaQuery,useGetCinemaByCategoryQuery,useGetCinemaByPopulerQuery, useGetCinemaByLeatestQuery, useDeleteCinemaMutation, useUpdateCinemaMutation, useAddCinemaMutation, useGetCinemaByIdQuery } = cinameApi;