"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useGetCategoryByIdQuery, useGetCategoryQuery, useUpdateCateogryMutation } from '@/redux/feature/category/categoryApi';
import { useAddCinemaMutation, useGetCinemaByIdQuery, useUpdateCinemaMutation } from '@/redux/feature/cinema/cinemaApi';
import { useGetFaqByIdQuery, useUpdateFaqMutation } from '@/redux/feature/faq/faqApi';
import { useImageUploadMutation } from '@/redux/feature/imageUpload/imageUploadApi';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'

type Category = {
    id: string,
    name: string
}

type Inputs = {
    name: string
    producerName: string
    productionManager: string
    description: string
    price: string
    realeaseDate: string
    categoryId: string
    image: any
}
const EditFaq = ({ params }: any) => {
    const faqId = params?.faqId;
    const { data, isLoading } = useGetFaqByIdQuery(faqId)
    const router = useRouter();
    const { ques, ans } = data?.data || {};
    const [updateFaq] = useUpdateFaqMutation()
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const { success, message } = await updateFaq({ id: faqId, data }).unwrap();

            if (success) {
                toast.success(message)
                if(typeof window !== "undefined"){
  
                    router.push('/dashboard/all-faq')
                }

            }

        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Cinema' })
        }
    }
    if (isLoading) {
        return <h1 className='text-center mt-10'>Loading...</h1>
    }
    return (
        <div className='w-full mx-auto border p-5 mt-10 rounded-md'>
            <Toaster />
            <h1 className='text-center font-semibold text-2xl'>Update FAQ</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput defaultValue={ques} register={register} type='text' name='ques' lebel='FAQ Question' placeholder='faq question' />
                    <FormInput defaultValue={ans} register={register} type='text' name='ans' lebel='FAQ Answare' placeholder='faq answare' />
                    <button className='bg-[#00246a] px-5 text-white py-1.5 mt-5 rounded-md' type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditFaq;