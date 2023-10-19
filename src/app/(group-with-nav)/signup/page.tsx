"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
import Swal from 'sweetalert2'


type Inputs = {
  contactNo: string
  password: string
  name: string
  email: string
  address: string
}
const Signup = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [userRegistration,{isLoading}] = useUserRegMutation();
  const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try {
      const result = await userRegistration({ ...data }).unwrap()
      if(isLoading){
        toast.loading('Signup...',{id: 'Signup'})
      }
      if (result.success) {
        toast.success('Signup Success',{id: 'Signup'})
        if(typeof window !== "undefined"){
          localStorage.setItem('user', JSON.stringify(result.data))
        localStorage.setItem('token', JSON.stringify(result.accessToken))
        router.push('/')
        }
      }
    }
    catch (err:any) {
      toast.error(err?.data?.message,{id: 'Signup'})
    }
  }

  return (
    <div className='w-full md:w-2/3 lg:w-1/3 mx-auto border p-5 mt-10 rounded-md'>
                <Toaster />
      <h1 className='text-center font-semibold text-2xl'>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput register={register} type='text' name='name' lebel='Your Name' placeholder='name' />
        <FormInput register={register} type='text' name='contactNo' lebel='Your Contact No' placeholder='contact no' />
        <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' />
        <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' />
        <FormInput register={register} type='text' name='address' lebel='Your Address' placeholder='address' />
        <h1 className='text-center'>Already have an account please <span className='text-[#00246a]'><Link href="/signin">signin</Link></span> </h1>
        <button className='w-full bg-[#00246a] my-5 text-white py-1 rounded-md' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;