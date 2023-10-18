"use client"
import { useAppSelector } from '@/redux/hooks/hooks';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
    const {id, name, email, profileImg, address, contactNo} = useAppSelector(state => state.auth)
    return (
       <div>
        <h1 className='text-center font-semibold text-2xl mt-5'>My Profile</h1>
         <div className='mt-10 grid grid-cols-2 p-3 gap-5'>
            <img className='h-72 w-full border' src={profileImg as string} alt="" />
            <div className='w-full border h-full p-3'>
                <div className='flex justify-end'>
                    <div>
                    <Link href={`/dashboard/profile/edit/${id}`}><button className='bg-[#00246a] mr-3 text-white px-3 py-1 rounded-md'>Edit Profile</button></Link>
                    <Link href={`/dashboard/profile/change-password/${id}`}><button className='bg-[#00246a] mr-3 text-white px-3 py-1 rounded-md'>Change Password</button></Link>
                    
                    </div>
                </div>
            <h1>My Name: {name}</h1>
            <h1>My Email: {email}</h1>
            <h1>My Address: {address}</h1>
            <h1>My Contact No: {contactNo}</h1>
            </div>
        </div>
       </div>
    );
};

export default Profile;