import { apiSlice } from "@/redux/RootApi/apiSlice";

const cinameApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCinema: builder.query({
            query: (data) => ({
                url: `/cenema/get-cenema?page=${data.page}&size=${data.size}&search=${data.search}`,
            })
        }),
        getCinemaById: builder.query({
            query: (id) => ({
                url: `/cenema/get-cenema-by-id/${id}`,
            })
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

export const {useGetCinemaQuery, useDeleteCinemaMutation, useUpdateCinemaMutation, useAddCinemaMutation, useGetCinemaByIdQuery } = cinameApi;