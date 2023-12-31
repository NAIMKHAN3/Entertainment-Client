'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllAdminQuery, useAllSuperAdminQuery, useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useAllBookingQuery, useDeleteBookingMutation, useUpdateBookingStatusMutation } from '@/redux/feature/booking/bookingApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllBooking = () => {
    const { data, isLoading } = useAllBookingQuery(undefined)
    const [updateStatus] = useUpdateBookingStatusMutation()
    const { sidebar } = useAppSelector(state => state.sidebar)
    const [deleteBooking] = useDeleteBookingMutation()
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
    const bookingDelete = async (id: string) => {
        try {
            const { success, message } = await deleteBooking(id).unwrap();
            if (success) {
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
                        <TableHeade>Rejected</TableHeade>
                        <TableHeade>Accepted</TableHeade>
                        <TableHeade>Deleted</TableHeade>
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
                                book.status === 'Pending' ? <>
                                    <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={() => statusChange({ id: book.id, status: "Rejected" })}>Rejected</button></TableBody>
                                    <TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md' onClick={() => statusChange({ id: book.id, status: "Accepted" })}>Accepted</button></TableBody>
                                </>

                                    : <>
                                        <TableBody></TableBody>
                                        <TableBody></TableBody>
                                    </>
                            }
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={() => bookingDelete(book.id)}>Delete</button></TableBody>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;