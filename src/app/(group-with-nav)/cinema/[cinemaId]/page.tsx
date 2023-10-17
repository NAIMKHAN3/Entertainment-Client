"use client"
import { useAddCartMutation } from '@/redux/feature/cart/cartApi';
import { useGetCinemaByIdQuery } from '@/redux/feature/cinema/cinemaApi';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const CinemaDetails = ({ params }: any) => {
    const cinemaid = params?.cinemaId;
    const [addCart] = useAddCartMutation();
    const { data, isLoading } = useGetCinemaByIdQuery(cinemaid)
    if (isLoading) {
        return <h1 className='text-center mt-10'>Loading...</h1>
    }
    const {id, image, realeaseDate, category, name, producerName, productionManager, price, description } = data?.data || {};
    console.log(data)

    const addCartToDb = async (id: string) => {
        try {
            const { success, message } = await addCart({ cenemaId: id }).unwrap()
            if (success) {
                toast.success(message)
            }
        }
        catch (err: any) {
            toast.error(err?.data?.message)
        }
    }
    return (
        <div className='p-5'>
            <Toaster />
            <div className='grid grid-cols-2 gap-3'>
                <div className=''>
                    <img className='h-96 w-full' src={image} alt="" />
                </div>
                <div className='border p-5 rounded-md'>
                    <h1 className='text-2xl text-center font-semibold my-5 text-[#00246a]'>Movie Information</h1>
                    <div className='grid grid-cols-2 my-3'>
                        <h1>
                            <span className=' font-semibold'>Movie Name: </span>{name}
                        </h1>
                        <h1 className=''>
                        <span className=' font-semibold'>Production Manager: </span> {productionManager}
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 my-3'>

                        <h1>
                        <span className='font-semibold'>Price: </span> {price}
                        </h1>
                        <h1 className=''>
                        <span className=' font-semibold'>Producer Name: </span> {producerName}
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 my-3'>

                        <h1>
                        <span className=' font-semibold'>Realease Date: </span> {realeaseDate}
                        </h1>
                        <h1 className=''>
                        <span className=' font-semibold'>Category: </span> {category?.name}
                        </h1>
                    </div>
                    <div>
                        <h1> <span className=' font-semibold mt-2'>Description: </span> {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio distinctio sint, voluptates soluta quia sit explicabo facilis nesciunt ratione repellat laborum harum! Provident in deleniti quaerat fugit magnam ratione modi!</h1>
                    </div>
                   
                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            <Link href={`/cinema/booking/${id}`}><button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white'>Booking</button></Link>
                            <button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white' onClick={() => addCartToDb(id)} >Add Cart</button>
                        </div>
                    
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div>

                    <div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CinemaDetails;