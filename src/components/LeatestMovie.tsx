"use client"
import {  useGetCinemaByLeatestQuery } from '@/redux/feature/cinema/cinemaApi';
import { ICinema } from '@/types/interface';
import React from 'react';
import Cart from './Cart';
import CartSkeleton from './CartSkeleton';

const LeatestMovie = () => {
    const {data,isLoading} = useGetCinemaByLeatestQuery(undefined)
   
    return (
        <div>
            <h1 className=" text-center font-semibold text-2xl text-[#00246a] py-5">Leatest Movie</h1>
            <div className='grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto'>
                {
                    isLoading ? <>
                    <CartSkeleton/>
                    <CartSkeleton/>
                    <CartSkeleton/>
                    <CartSkeleton/>
                    <CartSkeleton/>
                    <CartSkeleton/>
                    </> : data?.data?.map((cinema: ICinema) => <Cart key={cinema.id} cinema={cinema} />)
                }
                
            </div>
        </div>
    );
};

export default LeatestMovie;