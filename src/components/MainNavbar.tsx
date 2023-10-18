'use client'
import React, {useEffect} from 'react';
import List from './List';
import Link from 'next/link';
import MobileNavbar from './MobileNav';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { removeUser, userAdded } from '@/redux/feature/auth/authSlice';
import { getInfoToLocal } from '@/share';
import { useGetUserByIdQuery } from '@/redux/feature/auth/authApi';

const MainNavbar = () => {
    const { email } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const userInfo = getInfoToLocal('user')
    console.log(userInfo)
    const {data} = useGetUserByIdQuery(userInfo.id)
   
    const logout = () => {
        dispatch(removeUser())
    }
    useEffect(()=>{
        if (!email && data?.data) {
            dispatch(userAdded(data.data))
        }
    },[data])
    return (
        <div>
            <div className='hidden lg:block'>
                <div className='flex justify-between items-center px-24 mt-2 border py-2'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12' src="https://wop-files.s3.us-west-2.amazonaws.com/cinema-logo.png" alt="" />
                        <h1 className='text-xl font-semibold uppercase ml-2 text-[#00246a]'>Entertainment Hall</h1>
                    </div>
                    <div>
                        <input className='py-2 px-3 w-full rounded-full border' type="text" placeholder='Search Cinema' />
                    </div>
                    <div>
                        <ul className='flex justify-between items-center'>
                            <Link href="/"><List>Home</List></Link>
                            <Link href="/cinema"><List>Cinema</List></Link>
                            <Link href="/about"><List>About</List></Link>
                            <Link href="/faq"><List>FAQ</List></Link>
                            {
                                email ? <div className='flex items-center'>
                                    <Link href="/dashboard/profile"><List>Dashboard</List></Link>
                                    <List><button onClick={logout} className='bg-red-600 text-white px-3 py-1 rounded-md'>Logout</button></List>
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