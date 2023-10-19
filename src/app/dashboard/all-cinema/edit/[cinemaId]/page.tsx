"use client"
import FormInput from '@/components/FormInput';
import { useUserRegMutation } from '@/redux/feature/auth/authApi';
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
const AddCinema = ({ params }: any) => {
    const [image, setImage] = useState(null)
    const [updateCinema] = useUpdateCinemaMutation()
    const cinemaId = params?.cinemaId;
    const { data:cinema, isLoading } = useGetCinemaByIdQuery(cinemaId)
   const router = useRouter();
    const {id, realeaseDate, category, name, producerName, productionManager, price, description } = cinema?.data || {};
    const { data } = useGetCategoryQuery(undefined)
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
            const {success, message} = await updateCinema({id:cinemaId, data}).unwrap()
            if (success) {
                    toast.success(message)
                    router.push('/dashboard/all-cinema')
                
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
            <h1 className='text-center font-semibold text-2xl'>Add Cinema</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput defaultValue={name} register={register} type='text' name='name' lebel='Movie Name' placeholder='movie name' />
                    <FormInput defaultValue={producerName} register={register} type='text' name='producerName' lebel='Producer Name' placeholder='producer name' />
                </div>
                <div className='flex justify-between items-center'>
                    <FormInput defaultValue={productionManager} register={register} type='text' name='productionManager' lebel='Production Manager' placeholder='production manaer' />
                    <div className='w-full flex flex-col'>
                        <label htmlFor="" className='font-semibold'>Image</label>
                        {/* @ts-ignore */}
                        <input className='border my-2 px-2 py-1' type="file" onChange={(e) => setImage(e.target?.files[0])} />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <FormInput defaultValue={price} register={register} type='text' name='price' lebel='Price' placeholder='price' />
                    <div className='flex flex-col my-3 w-full mx-1'>
                        <label className="font-semibold" htmlFor="">Select Category</label>
                        <select defaultValue={category} className='w-full border my-2 px-2 py-1.5 focus:border-none focus:outline-none focus:ring focus:ring-blue-300' {...register('categoryId', { required: true })} id="">
                            {
                                data?.data?.map((category: Category) => {
                                    return <option value={category.id}>{category.name}</option>
                                })
                            }
                        </select>
                    </div>

                </div>
                <div className='flex justify-between items-center'>
                    <FormInput defaultValue={description} register={register} type='text' name='description' lebel='Movie Description' placeholder='description' />
                    <FormInput defaultValue={realeaseDate} register={register} type='date' name='realeaseDate' lebel='Realease Date' placeholder='realease date' />
                </div>
                <button className='bg-[#00246a] px-5 text-white py-1.5 mt-5 rounded-md' type="submit">Update</button>

            </form>
        </div>
    );
};

export default AddCinema;