'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import React from 'react';
import List from './List';
import Link from 'next/link';
import { getInfoToLocal } from '@/share';
import { userAdded } from '@/redux/feature/auth/authSlice';
import MobileSidebar from './MobileSidebar';

const Sidebar = () => {
    const { profileImg, name, role, email } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const userInfo = getInfoToLocal('user')
    console.log(userInfo)
    if (!email && userInfo?.email) {
        dispatch(userAdded(userInfo))
    }
    return (
        <div className='border min-h-screen'>
            <div className=''>
            <div className='flex justify-center my-3'>
                <img className='w-24 h-24 rounded-full border' src={profileImg as string} alt="" />
            </div>
            <h1 className='text-center text-lg font-semibold text-[#00246a]'>{name}</h1>
            <h1 className='text-center text-xs font-semibold border-b-2 pb-5 text-[#00246a]'>{role} Dashboard</h1>

            <ul className='my-5'>
                <List className='border pl-3 py-1'>My Profile</List>
                {
                    role === 'SuperAdmin' && <div>
                        <Link href='/dashboard/add-admin'><List className='border pl-3 py-1'>Add Admin</List></Link>
                        <List className='border pl-3 py-1'>FAQ</List>
                        <List className='border pl-3 py-1'>All Blog</List>
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
                        <List className='border pl-3 py-1'>All User</List>
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