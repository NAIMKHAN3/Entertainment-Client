"use client"
import FormInput from '@/components/FormInput';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"


type Inputs = {
  contactNo: string
  password: string
  name: string
  email: string
  address: string
}
const Signin = () => {
  const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try {
    
    }
    catch (err) {

    }
  }
  return (
    <div className='w-full md:w-2/3 lg:w-1/3 mx-auto border p-5 mt-20 rounded-md'>
      <h1 className='text-center font-semibold text-2xl'>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        
        <FormInput type='email' name='email' lebel='Your Email' placeholder='email' />
        <FormInput type='password' name='password' lebel='Your password' placeholder='password' />
       
        <h1 className='text-center'>New to Entertainment Website please <span className='text-blue-600'><Link href="/signup">signup</Link></span> </h1>
        <button className='w-full bg-indigo-600 my-5 text-white py-1 rounded-md' type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;