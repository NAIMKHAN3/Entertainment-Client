'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useAppSelector } from '@/redux/hooks/hooks';
import React from 'react';

const AllUser = () => {
    const {data} = useAllUserQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    return (
        <div>
             <table className={`table-auto ${sidebar? "hidden": null}`}>
             <thead>
                    <tr>
                        <TableHeade>Id</TableHeade>
                        <TableHeade>Name</TableHeade>
                        <TableHeade>Email</TableHeade>
                        <TableHeade>Phone</TableHeade>
                        <TableHeade>Address</TableHeade>
                        <TableHeade>Role</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((user:IUser) => <tr key={user.id}>
                            <TableBody>{user.id}</TableBody>
                            <TableBody>{user.name}</TableBody>
                            <TableBody>{user.email}</TableBody>
                            <TableBody>{user.contactNo}</TableBody>
                            <TableBody>{user.address}</TableBody>
                            <TableBody>{user.role}</TableBody>
                            <TableBody>Delete</TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllUser;