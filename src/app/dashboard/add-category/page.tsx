"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useAddCateogryMutation } from '@/redux/feature/category/categoryApi';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'



type Inputs = {
    name: string
}
const AddCategory = () => {
    const router = useRouter()
    const [addCategory] = useAddCateogryMutation();
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
          const res = await addCategory(data).unwrap();
          if(res.success){
            toast.success('Category Added Successfull')
            if(typeof window !== "undefined"){
                router.push('/dashboard/all-category')
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
            <h1 className='text-center font-semibold text-2xl'>Add Category</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' name='name' lebel='Category Name' placeholder='category' />
                    <button className='bg-[#00246a] px-5 text-white py-1.5 mt-5 rounded-md' type="submit">Submit</button>
                </div>
             
            </form>
        </div>
    );
};

export default AddCategory;