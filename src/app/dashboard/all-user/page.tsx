'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useAppSelector } from '@/redux/hooks/hooks';
import Link from 'next/link';
import React from 'react';

const AllUser = () => {
    const {data} = useAllUserQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    return (
        <div className='border h-full w-full lg:mt-10'>
             <table className={`table-auto w-full ${sidebar? "hidden": null}`}>
             <thead>
                    <tr>
                        {/* <TableHeade>Id</TableHeade> */}
                        <TableHeade>Name</TableHeade>
                        <TableHeade>Email</TableHeade>
                        <TableHeade>Phone</TableHeade>
                        <TableHeade>Address</TableHeade>
                        <TableHeade>Role</TableHeade>
                        <TableHeade>Promote</TableHeade>
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((user:IUser) => <tr key={user.id}>
                            {/* <TableBody>{user.id}</TableBody> */}
                            <TableBody>{user.name}</TableBody>
                            <TableBody>{user.email}</TableBody>
                            <TableBody>{user.contactNo}</TableBody>
                            <TableBody>{user.address}</TableBody>
                            <TableBody>{user.role}</TableBody>
                            <TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Make Admin</button></TableBody>
                            <Link href={`/dashboard/profile/edit/${user.id}`}><TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></TableBody></Link>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md'>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllUser;