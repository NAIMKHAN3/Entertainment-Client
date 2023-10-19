'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import React, { useEffect } from 'react';
import List from './List';
import Link from 'next/link';
import { getInfoToLocal } from '@/share';
import { userAdded } from '@/redux/feature/auth/authSlice';
import MobileSidebar from './MobileSidebar';
import { useGetUserByIdQuery } from '@/redux/feature/auth/authApi';
import {AiOutlineHome} from 'react-icons/ai'

const Sidebar = () => {
    const { profileImg, name, role, email } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const userInfo = getInfoToLocal('user')
    const {data} = useGetUserByIdQuery(userInfo?.id)
    useEffect(()=>{
        if (!email && data?.data) {
            dispatch(userAdded(data.data))
        }
    },[data])
    return (
        <div className='border hidden lg:block min-h-screen'>
            <div className=''>
            <div className='flex justify-center my-3'>
                <img className='w-24 h-24 rounded-full border' src={profileImg as string} alt="" />
            </div>
            <h1 className='text-center text-lg font-semibold text-[#00246a]'>{name}</h1>
            <h1 className='text-center text-xs font-semibold border-b-2 pb-5 text-[#00246a]'>{role} Dashboard</h1>

            <ul className='my-5'>
                <Link href='/dashboard/profile'><List className='border pl-3 py-1'>My Profile</List></Link>
                {
                    role === 'SuperAdmin' && <div>
                        <Link href='/dashboard/add-admin'><List className='border pl-3 py-1'>Add Admin</List></Link>
                        <Link href='/dashboard/all-admin'><List className='border pl-3 py-1'>All Admin</List></Link>
                        <Link href='/dashboard/add-cinema'><List className='border pl-3 py-1'>Add Cinema</List></Link>
                        <Link href='/dashboard/all-cinema'><List className='border pl-3 py-1'>All Cinema</List></Link>
                        <Link href='/dashboard/add-category'><List className='border pl-3 py-1'>Add Category</List></Link>
                        <Link href='/dashboard/all-category'><List className='border pl-3 py-1'>All Category</List></Link>
                        <Link href='/dashboard/add-faq'><List className='border pl-3 py-1'>Add FAQ</List></Link>
                        <Link href="/dashboard/all-faq"><List className='border pl-3 py-1'>All FAQ</List></Link>
                        <Link href='/dashboard/add-blog'><List className='border pl-3 py-1'>Add Blog</List></Link>
                        <Link href='/dashboard/all-blog'><List className='border pl-3 py-1'>All Blog</List></Link>
                        <Link href='/dashboard/all-user'><List className='border pl-3 py-1'>All User</List></Link>
                        <Link href='/dashboard/all-super-admin'><List className='border pl-3 py-1'>All Super Admin</List></Link>
                        <Link href='/dashboard/all-booking'><List className='border pl-3 py-1'>All Booking</List></Link>
                        
                    </div>
                }
                {
                    role === 'User' && <div>
                        <Link href='/dashboard/my-cart'><List className='border pl-3 py-1'>My Cart List</List></Link>
                        <Link href='/dashboard/my-booking'><List className='border pl-3 py-1'>My Booking List</List></Link>
                    </div>
                }
                {
                    role === 'Admin' && <div>
                        <Link href='/dashboard/add-admin'><List className='border pl-3 py-1'>Add Admin</List></Link>
                        <Link href='/dashboard/all-admin'><List className='border pl-3 py-1'>All Admin</List></Link>
                        <Link href='/dashboard/add-cinema'><List className='border pl-3 py-1'>Add Cinema</List></Link>
                        <Link href='/dashboard/all-cinema'><List className='border pl-3 py-1'>All Cinema</List></Link>
                        <Link href='/dashboard/add-category'><List className='border pl-3 py-1'>Add Category</List></Link>
                        <Link href='/dashboard/all-category'><List className='border pl-3 py-1'>All Category</List></Link>
                        <Link href='/dashboard/add-faq'><List className='border pl-3 py-1'>Add FAQ</List></Link>
                        <Link href="/dashboard/all-faq"><List className='border pl-3 py-1'>All FAQ</List></Link>
                        <Link href='/dashboard/add-blog'><List className='border pl-3 py-1'>Add Blog</List></Link>
                        <Link href='/dashboard/all-blog'><List className='border pl-3 py-1'>All Blog</List></Link>
                        <Link href='/dashboard/all-user'><List className='border pl-3 py-1'>All User</List></Link>
                        <Link href='/dashboard/all-super-admin'><List className='border pl-3 py-1'>All Super Admin</List></Link>
                        <Link href='/dashboard/all-booking'><List className='border pl-3 py-1'>All Booking</List></Link>
                        

                    </div>
                }



            </ul>

            <Link href='/'>
                <div className='flex justify-center items-center font-semibold gap-2 text-[#00246a] p-3'>
                <span><AiOutlineHome/> </span>
                <h1 className=''>Back To Home</h1>
                </div>
                </Link>
            </div>
            {/* <MobileSidebar/> */}
        </div>
    );
};

export default Sidebar;