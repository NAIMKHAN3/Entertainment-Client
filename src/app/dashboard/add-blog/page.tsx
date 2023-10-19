"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useAddBlogMutation } from '@/redux/feature/blog/blogApi';
import { useImageUploadMutation } from '@/redux/feature/imageUpload/imageUploadApi';
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
    image: string
    email: string
    address: string
}
const AddBlog = () => {
    const router = useRouter()
    const [addBlog] = useAddBlogMutation()
    const [imagePost] = useImageUploadMutation()
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { image, ...blogInfo } = data;
        try {
            const formData = new FormData();
            formData.append('image', image[0])
            const { success, data: imageUrl } = await imagePost(formData).unwrap();
            if (success) {

                data.image = imageUrl
                const result = await addBlog(data).unwrap()
                if (result?.success) {
                    toast.success(result?.message)
                    if(typeof window !== "undefined"){
  
                        router.push('/dashboard/all-blog')
                    }
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
            <h1 className='text-center font-semibold text-2xl'>Add Blog</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' name='title' lebel='Blog Title' placeholder='title' />
                    <FormInput register={register} type='text' name='description' lebel='Blog Description' placeholder='description' />
                </div>



                <div className='flex justify-between items-center'>
                <FormInput register={register} type='file' name='image' lebel='Blog Image' />
                    <button className='w-full bg-[#00246a] px-5 text-white py-1.5 ml-5 rounded-md' type="submit">Submit</button>
                </div>


            </form>
        </div>
    );
};

export default AddBlog;