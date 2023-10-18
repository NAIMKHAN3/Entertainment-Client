"use client"
import FormInput from '@/components/FormInput';
import { useChangePasswordMutation, useUserLoginMutation, useUserRegMutation } from '@/redux/feature/auth/authApi';
import { userAdded } from '@/redux/feature/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


type Inputs = {
    oldPassword: string
    newPassword: string
    confirmPassword: string
}
const ChangePassword = () => {
    const router = useRouter();
    const [changaPassword] = useChangePasswordMutation()
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log({ data })
        try {
            const result = await changaPassword(data).unwrap()
              if(result.success){
                toast.success(result?.message)

                router.push('/dashboard/profile')
              }

        }
        catch (err: any) {
            console.log(err?.data.message)
            toast.error(err?.data?.message, { id: 'Signin' })
        }
    }
    return (
        <div className='w-full md:w-2/3 mx-auto border p-5 mt-20 rounded-md'>
            <Toaster />
            <h1 className='text-center font-semibold text-2xl'>Change Password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>


                <FormInput register={register} type='password' name='oldPassword' lebel='Old Password' placeholder='old password' />
                <FormInput register={register} type='password' name='newPassword' lebel='New Password' placeholder='new password' />
                <FormInput register={register} type='password' name='confirmPassword' lebel='Confirm Password' placeholder='confirm password' />

                <button className='w-full bg-[#00246a] my-5 text-white py-1 rounded-md' type="submit">Password Change</button>
            </form>
        </div>
    );
};

export default ChangePassword;