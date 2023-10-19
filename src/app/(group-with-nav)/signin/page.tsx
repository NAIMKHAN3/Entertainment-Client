"use client"
import FormInput from '@/components/FormInput';
import { useUserLoginMutation, useUserRegMutation } from '@/redux/feature/auth/authApi';
import { userAdded } from '@/redux/feature/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


type Inputs = {
  contactNo: string
  password: string
  name: string
  email: string
  address: string
}
const Signin = () => {
  const [userLogin] = useUserLoginMutation();
  const dispatch = useDispatch()
  const router = useRouter();
  const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log({ data })
    try {
      const result = await userLogin(data).unwrap();
      if (result.success) {
        toast.success('Signin Success', { id: 'Signin' })
        if (typeof window !== "undefined") {

          localStorage.setItem('user', JSON.stringify(result.data))
          localStorage.setItem('token', JSON.stringify(result.accessToken))
        }
        dispatch(userAdded(result.data))
        if (typeof window !== "undefined") {
          router.push('/')
        }
      }

    }
    catch (err: any) {
      console.log(err?.data.message)
      toast.error(err?.data?.message, { id: 'Signin' })
    }
  }
  return (
    <div className='w-full md:w-2/3 lg:w-1/3 mx-auto border p-5 mt-20 rounded-md'>
      <Toaster />
      <h1 className='text-center font-semibold text-2xl'>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>


        <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' />
        <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' />

        <h1 className='text-center'>New to Entertainment Website please <span className='text-[#00246a]'><Link href="/signup">signup</Link></span> </h1>
        <button className='w-full bg-[#00246a] my-5 text-white py-1 rounded-md' type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;