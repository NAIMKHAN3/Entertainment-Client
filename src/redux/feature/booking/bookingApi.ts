"use client"
import { apiSlice } from "@/redux/RootApi/apiSlice";
import { getInfoToLocal } from "@/share";

let token = getInfoToLocal('token')

const bookingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (data) => ({
                url: '/booking/create-booking',
                method: "POST",
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["booking"]
        }),
        updateBookingStatus: builder.mutation({
            query: (data) => ({
                url: `/booking/update-booking-status/${data.id}?status=${data.status}`,
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["booking"]
        }),
        updateBooking: builder.mutation({
            query: (data) => ({
                url: `/booking/update-booking/${data.id}`,
                method: "PUT",
                body: data.data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["booking"]
        }),
        updatePaymentStatus: builder.mutation({
            query: (data) => ({
                url: `/booking/update-payment-status/${data.id}`,
                method: "PUT",
                body: data.data,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
                
            }),
            invalidatesTags: ["booking"]
        }),
        allBooking: builder.query({
            query: () => ({
                url: '/booking/get-bookings',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["booking"]
        }),
        myBookings: builder.query({
            query: () => ({
                url: '/booking/get-booking-by-user',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["booking"]
        }),
        getBookingById: builder.query({
            query: (id) => ({
                url: `/booking/get-booking-by-id/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            }),
            providesTags: ["booking"]
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/booking/delete-booking/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
               
            }),
            invalidatesTags: ["booking"]
        }),
    })
})


export const {useAddBookingMutation,useUpdatePaymentStatusMutation, useMyBookingsQuery, useGetBookingByIdQuery, useUpdateBookingMutation, useDeleteBookingMutation, useAllBookingQuery, useUpdateBookingStatusMutation} = bookingApi;