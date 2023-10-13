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
const Signup = () => {
  const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try {
    
    }
    catch (err) {

    }
  }
  return (
    <div className='w-full md:w-2/3 lg:w-1/3 mx-auto border p-5 mt-10 rounded-md'>
      <h1 className='text-center font-semibold text-2xl'>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput type='text' name='name' lebel='Your Name' placeholder='name' />
        <FormInput type='text' name='contactNo' lebel='Your Contact No' placeholder='contact no' />
        <FormInput type='email' name='email' lebel='Your Email' placeholder='email' />
        <FormInput type='password' name='password' lebel='Your password' placeholder='password' />
        <FormInput type='text' name='address' lebel='Your Address' placeholder='address' />
        <h1 className='text-center'>Already have an account please <span className='text-[#00246a]'><Link href="/signin">signin</Link></span> </h1>
        <button className='w-full bg-[#00246a] my-5 text-white py-1 rounded-md' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;