"use client"
import FormInput from '@/components/FormInput';
import { useAddBookingMutation } from '@/redux/feature/booking/bookingApi';
import { useGetCinemaByIdQuery } from '@/redux/feature/cinema/cinemaApi';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';



type Inputs = {
    bookingDate: string
    slot: string
    person: string
    cenemaId: string
}
const BookingPage = ({params}:any) => {
    const [addBooking] = useAddBookingMutation()
    const  cinemaId = params?.cinemaId;
    const { data, isLoading } = useGetCinemaByIdQuery(cinemaId)
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.cenemaId = cinemaId
        console.log(data)
        try {
            const {success, message} = await addBooking(data).unwrap();
            if(success){
                toast.success(message)
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
        <div className='w-full lg:w-1/2 mx-auto border p-5 mt-10 rounded-md'>
        <Toaster />
        <h1 className='text-center font-semibold text-2xl'>Booking Form</h1>
        <h1 className='text-center font-semibold text-xl my-3'>Movie Name : {data?.data?.name}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-between items-center'>
                <FormInput register={register} type='date' name='bookingDate' lebel='Booking Date' />
                <div className='flex flex-col my-3 w-full mx-1'>
                        <label className="font-semibold" htmlFor="">Select Slot</label>
                        <select className='w-full border my-2 px-2 py-1.5 focus:border-none focus:outline-none focus:ring focus:ring-blue-300' {...register('slot', { required: true })} id="">
                        <option value="Morning Show">Morning Show</option>
                        <option value="Evening Show">Evening Show</option>
                        <option value="Night Show">Night Show</option>
                            {/* <option value="Hindi Movie">Hindi Movie</option>
                        <option value="Bangla Movie">Bangla Movie</option>
                        <option value="English Movie">English Movie</option> */}
                        </select>
                    </div>
                <FormInput register={register} type='text' name='person' lebel='Number of person' placeholder='Person' />
            </div>
            

                <button className='w-full bg-[#00246a] text-white py-1.5 mt-5 rounded-md' type="submit">Booking</button>
            {/* <div className='flex justify-between items-center'>
                <FormInput register={register} type='text' name='address' lebel='Your Address' placeholder='address' />

            </div> */}
        </form>
    </div>
    );
};

export default BookingPage;