"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
import { useGetBlogByIdQuery, useUpdateBlogMutation } from '@/redux/feature/blog/blogApi';
import { useGetCategoryQuery } from '@/redux/feature/category/categoryApi';
import { useAddCinemaMutation, useGetCinemaByIdQuery, useUpdateCinemaMutation } from '@/redux/feature/cinema/cinemaApi';
import { useImageUploadMutation } from '@/redux/feature/imageUpload/imageUploadApi';
import { useAppDispatch } from '@/redux/hooks/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';
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
const EditBlog = ({ params }: any) => {
    const [image, setImage] = useState(null)
    const [updateBlog] = useUpdateBlogMutation()
    const blogId = params?.blogId;
    const { data, isLoading } = useGetBlogByIdQuery(blogId)
   const router = useRouter();
    const {id, title, description } = data?.data || {};
    const [imagePost] = useImageUploadMutation()
    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {

            if (image) {
                const formData = new FormData();
                formData.append('image', image)
                const { success, data: imageUrl } = await imagePost(formData).unwrap();
                if (success) {
                    data.image = imageUrl
                }
            }
            const {success, message} = await updateBlog({id:blogId, data}).unwrap()
            if (success) {
                    toast.success(message)
                    router.push('/dashboard/all-blog')
                
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
            <h1 className='text-center font-semibold text-2xl'>Update Cinema</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput defaultValue={title} register={register} type='text' name='title' lebel='Blog Title' placeholder='title' />
                    <FormInput defaultValue={description} register={register} type='text' name='description' lebel='Blog Description' placeholder='description' />
                </div>
                <div className='flex justify-between items-center'>
                    
                    <div className='w-full flex flex-col'>
                        <label htmlFor="" className='font-semibold'>Image</label>
                        {/* @ts-ignore */}
                        <input className='border my-2 px-2 py-1' type="file" onChange={(e) => setImage(e.target?.files[0])} />
                    </div>
                    <button className='bg-[#00246a] px-5 ml-3 text-white py-1.5 mt-5 rounded-md' type="submit">Update</button>
                </div>
                
            </form>
        </div>
    );
};

export default EditBlog;