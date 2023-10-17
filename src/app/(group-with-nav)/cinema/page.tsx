"use client"
import Cart from '@/components/Cart';
import { useGetCinemaQuery } from '@/redux/feature/cinema/cinemaApi';
import { ICinema } from '@/types/interface';
import React from 'react';

const Cinema = () => {
    const { data } = useGetCinemaQuery(undefined)
    console.log(data?.data)
    return (
        <div className='grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto'>
            {
                data?.data?.map((cinema: ICinema) => <Cart key={cinema.id} cinema={cinema} />)
            }
        </div>
    );
};

export default Cinema;