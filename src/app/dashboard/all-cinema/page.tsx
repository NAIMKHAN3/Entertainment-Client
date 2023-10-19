'use client'
import TableBody from '@/components/TableBody';
import TableHeade from '@/components/TableHeade';
import { useAllUserQuery } from '@/redux/feature/auth/authApi';
import { IUser } from '@/redux/feature/auth/authSlice';
import { useDeleteCinemaMutation, useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { useDeleteUserMutation, useUpdateUserRoleMutation } from '@/redux/feature/superAdmin/superAdminApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ICinema } from '@/types/interface';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllUser = () => {
    const { data } = useGetCinemaQuery(undefined)
    const { sidebar } = useAppSelector(state => state.sidebar)
    const [deleteCinema] = useDeleteCinemaMutation()
    const cinemaDelete = async (id:string) => {
        try{
            const {success, message} = await deleteCinema(id).unwrap();
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
                        <TableHeade>Movie Name</TableHeade>
                        <TableHeade>Category</TableHeade>
                        <TableHeade>Production Manager</TableHeade>
                        <TableHeade>Producer Name</TableHeade>
                        <TableHeade>Realease Date</TableHeade>
                        <TableHeade>Price</TableHeade>
                        <TableHeade>Edit</TableHeade>
                        <TableHeade>Action</TableHeade>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.data?.map((cinema:ICinema, index:number) => <tr key={cinema.id}>
                            <TableBody>{index + 1}</TableBody>
                            <TableBody><img className='w-12 h-12' src={cinema.image} alt="" /></TableBody>
                            <TableBody>{cinema.name}</TableBody>
                            <TableBody>{cinema.category?.name}</TableBody>
                            <TableBody>{cinema.productionManager}</TableBody>
                            <TableBody>{cinema.producerName}</TableBody>
                            <TableBody>{cinema.realeaseDate}</TableBody>
                            <TableBody>{cinema.price}</TableBody>
                            {/* <Link href={`/dashboard/profile/edit/${cinema.id}`}><TableBody><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></TableBody></Link> */}
                            <TableBody><Link href={`/dashboard/all-cinema/edit/${cinema.id}`}><button className='bg-[#00246a] text-white px-3 py-1 rounded-md'>Edit</button></Link> </TableBody>
                            <TableBody><button className='bg-red-700 text-white px-3 py-1 rounded-md' onClick={()=> cinemaDelete(cinema.id as string)}>Delete</button></TableBody>
                            
                        </tr>)
                    }
                </tbody>
             </table>
        </div>
    );
};

export default AllUser;