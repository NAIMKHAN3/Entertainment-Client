'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import React, { useEffect } from 'react';
import List from './List';
import Link from 'next/link';
import { getInfoToLocal } from '@/share';
import { userAdded } from '@/redux/feature/auth/authSlice';
import MobileSidebar from './MobileSidebar';
import { useGetUserByIdQuery } from '@/redux/feature/auth/authApi';

const Sidebar = () => {
    const { profileImg, name, role, email } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const userInfo = getInfoToLocal('user')
    const {data} = useGetUserByIdQuery(userInfo.id)
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
                        <Link href='/dashboard/add-cinema'><List className='border pl-3 py-1'>Add Cinema</List></Link>
                        <Link href='/dashboard/add-category'><List className='border pl-3 py-1'>Add Category</List></Link>
                        <Link href='/dashboard/add-faq'><List className='border pl-3 py-1'>Add FAQ</List></Link>
                        <List className='border pl-3 py-1'>FAQ</List>
                        <Link href='/dashboard/add-blog'><List className='border pl-3 py-1'>Add Blog</List></Link>
                        <List className='border pl-3 py-1'>All Blog</List>
                        <Link href='/dashboard/all-user'><List className='border pl-3 py-1'>All User</List></Link>
                        <Link href='/dashboard/all-admin'><List className='border pl-3 py-1'>All Admin</List></Link>
                        <Link href='/dashboard/all-super-admin'><List className='border pl-3 py-1'>All Super Admin</List></Link>
                        <Link href='/dashboard/all-booking'><List className='border pl-3 py-1'>All Booking</List></Link>
                        <Link href='/dashboard/all-cinema'><List className='border pl-3 py-1'>All Cinema</List></Link>
                    </div>
                }
                {
                    role === 'User' && <div>
                        <List className='border pl-3 py-1'>Cart list</List>
                        <List className='border pl-3 py-1'>Booking list</List>
                    </div>
                }
                {
                    role === 'Admin' && <div>
                        <List className='border pl-3 py-1'>Add User</List>
                        <Link href='/dashboard/all-user'><List className='border pl-3 py-1'>All User</List></Link>
                        <List className='border pl-3 py-1'>Add Cinema</List>
                        <List className='border pl-3 py-1'>All Cinema</List>
                    </div>
                }



            </ul>
            <Link href='/'><h1 className='mb-0'>Back To Home</h1></Link>
            </div>
            {/* <MobileSidebar/> */}
        </div>
    );
};

export default Sidebar;