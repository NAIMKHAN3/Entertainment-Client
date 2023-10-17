import { apiSlice } from "@/redux/RootApi/apiSlice";

const bookingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (data) => ({
                url: '/booking/create-booking',
                method: "POST",
                body: data
            })
        })
    })
})


export const {useAddBookingMutation} = bookingApi;