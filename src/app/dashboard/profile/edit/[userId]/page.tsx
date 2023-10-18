"use client"
import FormInput from '@/components/FormInput';
import { useGetUserByIdQuery, useUpdateUserMutation, useUserRegMutation } from '@/redux/feature/auth/authApi';
import { userAdded } from '@/redux/feature/auth/authSlice';
import { useImageUploadMutation } from '@/redux/feature/imageUpload/imageUploadApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { getInfoToLocal } from '@/share';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'


type Inputs = {
    contactNo: string
    password: string
    name: string
    email: string
    address: string
    profileImg: string
}
const EditProfile = ({ params }: any) => {
    const userId = params?.userId;
    const { id } = useAppSelector(state => state.auth)
    const { data, isLoading } = useGetUserByIdQuery(userId)
    const { name, address, contactNo, profileImg} = data?.data || {};
    const [image, setImage] = useState(null)
    console.log(data)
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [imagePost] = useImageUploadMutation()
    const [updateUser] = useUpdateUserMutation()

    const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
            if (image) {
                const formData = new FormData();
                formData.append('image', image)
                const { success, data: imageUrl } = await imagePost(formData).unwrap();
                if (success) {
                    data.profileImg = imageUrl
                }
            }
            console.log(data)
            const result = await updateUser({ id: userId, body: data }).unwrap()
            if (result?.success) {
                toast.success('Profile Updated')
                const user = getInfoToLocal('user')

                if (user?.id === result?.data?.id) {
                    dispatch(userAdded(result?.data))
                }
                if (userId === id) {
                    router.push('/dashboard/profile')
                }
                else if(result?.data?.role === 'Admin'){
                    router.push('/dashboard/all-admin')
                }
                else if(result?.data?.role === 'User'){
                    router.push('/dashboard/all-user')
                }
                else if(result?.data?.role === 'SuperAdmin'){
                    router.push('/dashboard/all-super-admin')
                }

            }
        }
        catch (err: any) {
            toast.error(err?.data?.message, { id: 'Signup' })
        }
    }
    if (isLoading) {
        return <h1 className="text-center my-5 ">Loading...</h1>
    }
    return (
        <div className='w-full mx-auto border p-5 mt-10 rounded-md'>
            <Toaster />
            <h1 className='text-center font-semibold text-2xl'>Edit Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' defaultValue={name} name='name' lebel='Your Name' placeholder='name' />
                    <FormInput register={register} type='text' defaultValue={contactNo} name='contactNo' lebel='Your Contact No' placeholder='contact no' />
                </div>


                <div className='flex justify-between items-center'>
                    <FormInput register={register} type='text' defaultValue={address} name='address' lebel='Your Address' placeholder='address' />
                    <div className='w-full flex flex-col'>
                        <label htmlFor="" className='font-semibold'>Image</label>
                        {/* @ts-ignore */}
                        <input className='border my-2 px-2 py-1' type="file" onChange={(e) => setImage(e.target?.files[0])} />
                    </div>
                </div>
                <button className=' bg-[#00246a] text-white py-2 px-5 mt-5 rounded-md' type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default EditProfile;