'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useDeleteCateogryMutation, useGetCategoryQuery } from '@/redux/feature/category/categoryApi';
import { useDeleteCinemaMutation, useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { useDeleteFaqMutation, useGetFaqQuery } from '@/redux/feature/faq/faqApi';
import { useDeleteUserMutation, useUpdateUserRoleMutation } from '@/redux/feature/superAdmin/superAdminApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ICinema } from '@/types/interface';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllFaq = () => {
    const { data } = useGetFaqQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    const [deleteFaq] = useDeleteFaqMutation();
    const faqDelete = async (id:string) => {
        try{
            const {success, message} = await deleteFaq(id).unwrap();
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
                        <TableHeade>Faq Question</TableHeade>
                        <TableHeade>Faq Answare</TableHeade>
                        
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((faq:any, index:number) => <tr key={faq?.id}>
                            <TableBody>{index + 1}</TableBody>
                            <TableBody>{faq?.ques}</TableBody>
                            <TableBody>{faq?.ans}</TableBody>
                            <TableBody><Link href={`/dashboard/all-faq/edit/${faq?.id}`}><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></Link> </TableBody>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={()=> faqDelete(faq.id as string)}>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllFaq;