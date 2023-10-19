"use client"
import FormInput from '@/components/FormInput';
import { useDeleteBookingMutation, useGetBookingByIdQuery, useUpdateBookingMutation } from '@/redux/feature/booking/bookingApi';
import { useAppSelector } from '@/redux/hooks/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
type Inputs = {
    bookingDate: string
    slot: string
    person: string
    cenemaId: string
}
const EditBooking = ({params}:any) => {
    const bookingId = params.bookingId;
    const {data, isLoading} = useGetBookingByIdQuery(bookingId)
    const router = useRouter();
    const [updateBooking] = useUpdateBookingMutation()

    const {role} = useAppSelector(state => state.auth)
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        data.cenemaId = data.cenemaId
        console.log(data)
        try {
            const {success, message} = await updateBooking({id:bookingId,data}).unwrap();
            if(success){
                toast.success(message)
                if(role === 'User'){
                    if(typeof window !== "undefined"){
  
                        router.push('/dashboard/my-booking')
                    }
                }else{
                    if(typeof window !== "undefined"){
  
                        router.push('/dashboard/all-booking')
                    }
                }
            }
            
           
        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    if(isLoading){
        return <h1 className='text-center font-semibold text-2xl mt-5'>Loading...</h1>
    }
    return (
        <div className='w-full lg:w-1/2 mx-auto border p-5 mt-10 rounded-md'>
        <Toaster />
        <h1 className='text-center font-semibold text-2xl'>Booking update Form</h1>
        <h1 className='text-center font-semibold text-xl my-3'>Movie Name : {data?.data?.cenema?.name}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-between items-center'>
                <FormInput defaultValue={data?.data?.bookingDate} register={register} type='date' name='bookingDate' lebel='Booking Date' />
                <div className='flex flex-col my-3 w-full mx-1'>
                        <label className="font-semibold" htmlFor="">Select Slot</label>
                        <select defaultValue={data?.data?.slot} className='w-full border my-2 px-2 py-1.5 focus:border-none focus:outline-none focus:ring focus:ring-blue-300' {...register('slot', { required: true })} id="">
                        <option value="Morning Show">Morning Show</option>
                        <option value="Evening Show">Evening Show</option>
                        <option value="Night Show">Night Show</option>
                            {/* <option value="Hindi Movie">Hindi Movie</option>
                        <option value="Bangla Movie">Bangla Movie</option>
                        <option value="English Movie">English Movie</option> */}
                        </select>
                    </div>
                <FormInput defaultValue={data.data.person} register={register} type='text' name='person' lebel='Number of person' placeholder='Person' />
            </div>
            

                <button className='w-full bg-[#00246a] text-white py-1.5 mt-5 rounded-md' type="submit">Booking</button>
            {/* <div className='flex justify-between items-center'>
                <FormInput register={register} type='text' name='address' lebel='Your Address' placeholder='address' />

            </div> */}
        </form>
    </div>
    );
};

export default EditBooking;