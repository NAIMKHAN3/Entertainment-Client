'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useDeleteCateogryMutation, useGetCategoryQuery } from '@/redux/feature/category/categoryApi';
import { useDeleteCinemaMutation, useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { useDeleteUserMutation, useUpdateUserRoleMutation } from '@/redux/feature/superAdmin/superAdminApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ICinema } from '@/types/interface';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllCategory = () => {
    const { data } = useGetCategoryQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    const [deleteCategory] = useDeleteCateogryMutation();
    const categoryDelete = async (id:string) => {
        try{
            const {success, message} = await deleteCategory(id).unwrap();
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
                        <TableHeade>Category Name</TableHeade>
                        
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((category:any, index:number) => <tr key={category?.id}>
                            <TableBody>{index + 1}</TableBody>
                            <TableBody>{category.name}</TableBody>
                            <TableBody><Link href={`/dashboard/all-category/edit/${category.id}`}><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></Link> </TableBody>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={()=> categoryDelete(category.id as string)}>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllCategory;