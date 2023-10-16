'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllAdminQuery, useAllSuperAdminQuery, useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useAppSelector } from '@/redux/hooks/hooks';
import React from 'react';

const AllSuperAdmin = () => {
    const {data} = useAllSuperAdminQuery(undefined)
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
                        <TableHeade>Demotion</TableHeade>
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
                            <TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></TableBody>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md'>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllSuperAdmin;