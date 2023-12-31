'use client'
import React, { useEffect } from 'react';
import List from './List';
import Link from 'next/link';
import MobileNavbar from './MobileNav';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { removeUser, userAdded } from '@/redux/feature/auth/authSlice';
import { getInfoToLocal } from '@/share';
import { useGetUserByIdQuery } from '@/redux/feature/auth/authApi';
import toast, { Toaster } from 'react-hot-toast';

const MainNavbar = () => {
    const { email , name, profileImg } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const userInfo = getInfoToLocal('user')
    console.log(userInfo)
    const { data } = useGetUserByIdQuery(userInfo?.id)

    const logout = () => {
        dispatch(removeUser())
        toast.success('Logout Success')
    }
    useEffect(() => {
        if (!email && data?.data) {
            dispatch(userAdded(data.data))
        }
    }, [data])
    return (
        <div>
            <Toaster />
            <div className='hidden lg:block bg-gray-200'>
                <div className='flex justify-between items-center px-24 mt-2 border py-2'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12' src="https://wop-files.s3.us-west-2.amazonaws.com/cinema-logo.png" alt="" />
                        <h1 className='text-xl font-semibold uppercase ml-2 text-[#00246a]'>Entertainment Hall</h1>
                    </div>
                    <div>
                        <ul className='flex justify-between items-center'>
                            <Link href="/"><List>Home</List></Link>
                            <Link href="/cinema"><List>Cinema</List></Link>
                            <Link href="/blog"><List>Blog</List></Link>
                            <Link href="/about"><List>About</List></Link>
                            <Link href="/faq"><List>FAQ</List></Link>
                            {
                                email ? <div className='flex items-center'>
                                    <Link href="/dashboard/profile"><List>Dashboard</List></Link>
                                    <List><button onClick={logout} className='bg-red-600 text-white px-3 py-1 rounded-md'>Logout</button></List>
                                    {
                                        profileImg ? <Link href="/dashboard/profile"><List><img className='w-12 h-12 rounded-full border p-1 border-[#00246a]' src={profileImg as string} alt="" /></List></Link> : null
                                    }
                                </div> :
                                    <Link href="/signin"><List>SignIn</List></Link>
                            }

                        </ul>
                    </div>
                </div>
            </div>
            <MobileNavbar />
        </div>
    );
};

export default MainNavbar;