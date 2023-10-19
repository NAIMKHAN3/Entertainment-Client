import { apiSlice } from "@/redux/RootApi/apiSlice";

const bookingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (data) => ({
                url: '/booking/create-booking',
                method: "POST",
                body: data
            }),
            invalidatesTags: ["booking"]
        }),
        updateBookingStatus: builder.mutation({
            query: (data) => ({
                url: `/booking/update-booking-status/${data.id}?status=${data.status}`,
                method: "PATCH",
            }),
            invalidatesTags: ["booking"]
        }),
        updateBooking: builder.mutation({
            query: (data) => ({
                url: `/booking/update-booking/${data.id}`,
                method: "PUT",
                body: data.data
            }),
            invalidatesTags: ["booking"]
        }),
        updatePaymentStatus: builder.mutation({
            query: (data) => ({
                url: `/booking/update-payment-status/${data.id}`,
                method: "PUT",
                body: data.data,
                
            }),
            invalidatesTags: ["booking"]
        }),
        allBooking: builder.query({
            query: () => ({
                url: '/booking/get-bookings',
            }),
            providesTags: ["booking"]
        }),
        myBookings: builder.query({
            query: () => ({
                url: '/booking/get-booking-by-user',
            }),
            providesTags: ["booking"]
        }),
        getBookingById: builder.query({
            query: (id) => ({
                url: `/booking/get-booking-by-id/${id}`,
            }),
            providesTags: ["booking"]
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/booking/delete-booking/${id}`,
                method: "DELETE",
               
            }),
            invalidatesTags: ["booking"]
        }),
    })
})


export const {useAddBookingMutation,useUpdatePaymentStatusMutation, useMyBookingsQuery, useGetBookingByIdQuery, useUpdateBookingMutation, useDeleteBookingMutation, useAllBookingQuery, useUpdateBookingStatusMutation} = bookingApi;