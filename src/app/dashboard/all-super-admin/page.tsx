'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllAdminQuery, useAllSuperAdminQuery, useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useDeleteUserMutation, useUpdateUserRoleMutation } from '@/redux/feature/superAdmin/superAdminApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllSuperAdmin = () => {
    const {data} = useAllSuperAdminQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    const [roleUpdate] = useUpdateUserRoleMutation()
    const [deleteUser] = useDeleteUserMutation()
    const updateRole = async (data:{body:string, id:string}) => {
        try{
            const {success, message} = await roleUpdate(data).unwrap();
            if(success){
                toast.success(message)
            }

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    const userDelete = async (id:string) => {
        try{
            const {success, message} = await deleteUser(id).unwrap();
            if(success){
                console.log(success)
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
             <table className={`table-auto w-full ${sidebar? "hidden": null}`}>
             <thead>
                    <tr>
                        <TableHeade>No</TableHeade>
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
                        data?.data?.map((user:IUser,index:number) => <tr key={user.id}>
                            <TableBody>{index +1}</TableBody>
                            <TableBody>{user.name}</TableBody>
                            <TableBody>{user.email}</TableBody>
                            <TableBody>{user.contactNo}</TableBody>
                            <TableBody>{user.address}</TableBody>
                            <TableBody>{user.role}</TableBody>
                            <TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md' onClick={()=>updateRole({id:user.id as string, body:"Admin"})}>Make Admin</button></TableBody>
                            <Link href={`/dashboard/profile/edit/${user.id}`}><TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md' >Edit</button></TableBody></Link>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={()=> userDelete(user.id as string)}>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllSuperAdmin;