'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllAdminQuery, useAllSuperAdminQuery, useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useAllBookingQuery, useDeleteBookingMutation, useMyBookingsQuery, useUpdateBookingStatusMutation, useUpdatePaymentStatusMutation } from '@/redux/feature/booking/bookingApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyBooking = () => {
    const { data, isLoading } = useMyBookingsQuery(undefined)
    const [updateStatus] = useUpdateBookingStatusMutation();
    const [deleteBooking] = useDeleteBookingMutation()
    const [updatePaymentStatus] = useUpdatePaymentStatusMutation()
    const { sidebar } = useAppSelector(state => state.sidebar)

    if (isLoading) {
        return <h1 className='text-center mt-10'>Loading...</h1>
    }
    const statusChange = async (data: any) => {
        try {
            //@ts-ignore
            const { success, message } = await updateStatus(data).unwrap()
            console.log(success, message)
            if (success) {
                toast.success(message)
            }
        }
        catch (err: any) {
            toast.error(err?.data?.message)
        }
    }
    const bookingDelete = async (id:string) => {
        try{
            const {success, message} = await deleteBooking(id).unwrap();
            if(success){
                toast.success(message)
            }

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    const updatePayment = async (id:string) => {
        try{
            const {success, message} = await updatePaymentStatus({id, data:{paymentStatus:true}}).unwrap();
            if(success){
                toast.success(message)
            }

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    return (
        <div className='border h-full w-full lg:mt-10'>
            <Toaster />
            <table className={`table-auto w-full ${sidebar ? "hidden" : null}`}>
                <thead>
                    <tr>
                        {/* <TableHeade>Id</TableHeade> */}
                        <TableHeade>Movie Name</TableHeade>
                        <TableHeade>User Name</TableHeade>
                        <TableHeade>Booking Date</TableHeade>
                        <TableHeade>Booking Slot</TableHeade>
                        <TableHeade>Person</TableHeade>
                        <TableHeade>Status</TableHeade>
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Cancel</TableHeade>
                        <TableHeade>Delete</TableHeade>
                        <TableHeade>PAY</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((book: any) => <tr key={book.id}>
                            {/* <TableBody>{user.id}</TableBody> */}
                            <TableBody>{book.cenema.name}</TableBody>
                            <TableBody>{book.user.name}</TableBody>
                            <TableBody>{book.bookingDate}</TableBody>
                            <TableBody>{book.slot}</TableBody>
                            <TableBody>{book.person}</TableBody>
                            <TableBody>{book.status}</TableBody>
                            <Link href={`/dashboard/my-booking/edit/${book.id}`}><TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md' >Edit</button></TableBody></Link>
                                    {
                                        book.status === "Pending"? <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={() => statusChange({ id: book.id, status: "Rejected" })}>Cancel</button></TableBody>
                                        : <TableBody></TableBody>
                                    }
                                    <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={() => bookingDelete(book.id)}>Delete</button></TableBody>
                                    {
                                        book.paymentStatus ? <TableBody><button className='bg-green-700 text-white px-3 py-1 rounded-md'>Paid</button></TableBody>
                                        : <TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md' onClick={() => updatePayment(book.id)}>Payment</button></TableBody>
                                    }
                              


                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBooking;