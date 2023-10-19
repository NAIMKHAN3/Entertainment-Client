"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useCreateAdmitMutation } from '@/redux/feature/superAdmin/superAdminApi';
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
const AddAdmin = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [createAdmin, { isLoading }] = useCreateAdmitMutation();
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
            const result = await createAdmin({ ...data }).unwrap()
            if (result.success) {
                toast.success('Admin Created')
                if(typeof window !== "undefined"){
  
                    router.push('/dashboard/all-admin')
                }
            }
        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }

    return (
        <div className='w-full mx-auto border p-5 mt-10 rounded-md'>
            <Toaster />
            <h1 className='text-center font-semibold text-2xl'>Admin Added</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' name='name' lebel='Your Name' placeholder='name' />
                    <FormInput register={register} type='text' name='contactNo' lebel='Your Contact No' placeholder='contact no' />
                </div>
                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' />
                    <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' />
                </div>

                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' name='address' lebel='Your Address' placeholder='address' />

                    <button className='w-full bg-[#00246a] text-white py-1.5 mt-5 rounded-md' type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default AddAdmin;