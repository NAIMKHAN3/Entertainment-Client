"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'



type Inputs = {
    contactNo: string
    password: string
    name: string
    email: string
    address: string
}
const AddBlog = () => {
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }

    return (
        <div className='w-full mx-auto border p-5 mt-10 rounded-md'>
            <Toaster />
            <h1 className='text-center font-semibold text-2xl'>Add Blog</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' name='title' lebel='Blog Title' placeholder='title' />
                    <FormInput register={register} type='text' name='description' lebel='Blog Description' placeholder='description' />
                </div>



                <div className='flex justify-between items-center'>
                    <input type="file" className='border w-full' />
                    <button className='w-full bg-[#00246a] px-5 text-white py-1.5 ml-5 rounded-md' type="submit">Submit</button>
                </div>


            </form>
        </div>
    );
};

export default AddBlog;