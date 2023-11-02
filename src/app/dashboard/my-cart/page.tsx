"use client"
import CartSkeleton from '@/components/CartSkeleton';
import { useDeleteCartMutation, useGetCartQuery } from '@/redux/feature/cart/cartApi';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyCart = () => {
    const { data, isLoading } = useGetCartQuery(undefined);
    const [deleteCart] = useDeleteCartMutation()

    const cartDelete = async (id: string) => {
        try {
            const { success, message } = await deleteCart(id).unwrap();
            if (success) {
                console.log(success)
                toast.success(message)
            }

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    return (
        <div>
            <h1 className='text-center font-semibold text-2xl my-10'>My Cart List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 p-3'>

                {
                    isLoading ? <>
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                    </> : data?.data?.map((cart: any) => <div key={cart?.id} className='border shadow-lg p-3'>
                        <Toaster />
                        <img className='h-52 w-full' src={cart.cenema.image} alt="" />
                        <div className='my-2 font-semibold'>
                            <h1>Movie Name : {cart.cenema.name}</h1>
                            <h1>Price : {cart.cenema.price}</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-3 my-2'>
                            <Link href={`/cinema/booking/${cart.cenema.id}`}><button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white'>Booking</button></Link>
                            <button className='w-full bg-red-600 hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white' onClick={() => cartDelete(cart.id as string)}>Delete Cart</button>
                        </div>
                    </div>)
                }

                {

                }
            </div>
        </div>
    );
};

export default MyCart;