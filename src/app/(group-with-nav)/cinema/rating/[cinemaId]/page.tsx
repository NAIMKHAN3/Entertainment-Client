"use client"
import FormInput from '@/components/FormInput';
import { useAddBookingMutation } from '@/redux/feature/booking/bookingApi';
import { useGetCinemaByIdQuery } from '@/redux/feature/cinema/cinemaApi';
import { useAddRatingMutation } from '@/redux/feature/rating/ratingApi';
import { getInfoToLocal } from '@/share';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';



type Inputs = {
    rating: string
    comment: string
    cenemaId: string
}
const RatingPage = ({params}:any) => {
    const [addRating] = useAddRatingMutation();
    const router = useRouter();
    const  cinemaId = params?.cinemaId;
    const { data, isLoading } = useGetCinemaByIdQuery(cinemaId)
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.cenemaId = cinemaId
        const token = getInfoToLocal('token')
    const user = getInfoToLocal('user')
        try {
            if(!token){
                if(typeof window !== "undefined"){
                    router.push('/signin')
                }
            }else if(user?.role && user.role !== 'User'){
                toast.error(`Your are ${user.role}`)
            } else{
                const {success, message} = await addRating(data).unwrap();
            if(success){
                toast.success(message)
                if(typeof window !== "undefined"){
  
                    router.push(`/cinema/${cinemaId}`)
                }
            }
            }
            
            
           
        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    if (isLoading) {
        return <h1 className='text-center mt-10'>Loading...</h1>
    }
    return (
        <div className='w-full lg:w-1/2 mx-auto border m-3 p-5 mt-10 rounded-md'>
        <Toaster />
        <h1 className='text-center font-semibold text-2xl'>Rating Form</h1>
        <h1 className='text-center font-semibold text-xl my-3'>Movie Name : {data?.data?.name}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-between items-center'>
                <FormInput register={register} type='text' name='rating' lebel='Rating' placeholder='rating' />
               
                <FormInput register={register} type='text' name='comment' lebel='Review' placeholder='review' />
            </div>
            

                <button className='w-full bg-[#00246a] text-white py-1.5 mt-5 rounded-md' type="submit">Rating</button>
        </form>
    </div>
    );
};

export default RatingPage;