import { apiSlice } from "@/redux/RootApi/apiSlice";

const bookingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (data) => ({
                url: '/booking/create-booking',
                method: "POST",
                body: data
            })
        }),
        updateBookingStatus: builder.mutation({
            query: (data) => ({
                url: `/booking/update-booking-status/${data.id}?status=${data.status}`,
                method: "PATCH",
            })
        }),
        allBooking: builder.query({
            query: () => ({
                url: '/booking/get-bookings',
            })
        }),
    })
})


export const {useAddBookingMutation, useAllBookingQuery, useUpdateBookingStatusMutation} = bookingApi;