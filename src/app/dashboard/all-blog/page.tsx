'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useDeleteBlogMutation, useGetBlogQuery } from '@/redux/feature/blog/blogApi';
import { useDeleteCinemaMutation, useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { useDeleteUserMutation, useUpdateUserRoleMutation } from '@/redux/feature/superAdmin/superAdminApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ICinema } from '@/types/interface';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllUser = () => {
    const { data } = useGetBlogQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    const [deleteBlog] = useDeleteBlogMutation()
    const BlogDelete = async (id:string) => {
        try{
            const {success, message} = await deleteBlog(id).unwrap();
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
                        <TableHeade>Image</TableHeade>
                        <TableHeade>Blog Title</TableHeade>
                        <TableHeade>Blog Description</TableHeade>
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((blog:any, index:number) => <tr key={blog.id}>
                            <TableBody>{index + 1}</TableBody>
                            <TableBody><img className='w-12 h-12' src={blog.image} alt="" /></TableBody>
                            <TableBody>{blog.title}</TableBody>
                            <TableBody>{blog.description}</TableBody>
                            
                            
                            <TableBody><Link href={`/dashboard/all-blog/edit/${blog.id}`}><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></Link> </TableBody>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={()=> BlogDelete(blog.id as string)}>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllUser;