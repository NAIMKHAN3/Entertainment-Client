'use client'
import { AiOutlineMenu, } from 'react-icons/ai';

import { ImCross } from 'react-icons/im';


import { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
// import { removeUser } from '../redux/user/userSlice';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import List from './List';
import { sidebarFalse, sidebarTrue } from '@/redux/feature/dashboard/sidebarSlice';


const MobileSidebar = () => {
    // const dispatch = useAppDispatch()
    const handleLogout = () => {
        // dispatch(removeUser())
    }
    const [isOpen, setIsOpen] = useState(false);
    const { profileImg, name, role, email } = useAppSelector(state => state.auth)
    const { sidebar } = useAppSelector(state => state.sidebar)

const dispatch = useAppDispatch()
    return (
        <>
            <div className="lg:hidden flex items-center justify-between mx-5 py-2 transition duration-700">
                <div>
                    <p
                        className="flex justify-center items-center bg-white px-2 py-1 text-primary rounded cursor-pointer"
                        onClick={()=> dispatch(sidebarTrue())}
                    >
                        <span>
                            <AiOutlineMenu className="text-2xl mr-1" />
                        </span>
                    </p>
                </div>
            </div>
            <div className="lg:hidden">
                <div
                    className={`absolute top-0 duration-700   ${sidebar ? "left-0 duration-700" : "left-[-1200px]"
                        } z-30 bg-white w-full p-3 min-h-screen`}>
                    <p className={` absolute top-5 right-2  text-[#00246a] py-1 cursor-pointer`}
                        onClick={()=> dispatch(sidebarFalse())}>
                        <span>
                            <ImCross className="text-xl  mr-1" />
                        </span>
                    </p>
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
                        <Link href='/dashboard/add-cinema'><List className='border pl-3 py-1'>Add Cinema</List></Link>
                        <Link href='/dashboard/add-category'><List className='border pl-3 py-1'>Add Category</List></Link>
                        <Link href='/dashboard/add-faq'><List className='border pl-3 py-1'>Add FAQ</List></Link>
                        <List className='border pl-3 py-1'>FAQ</List>
                        <Link href='/dashboard/add-blog'><List className='border pl-3 py-1'>Add Blog</List></Link>
                        <List className='border pl-3 py-1'>All Blog</List>
                        <Link href='/dashboard/all-user'><List className='border pl-3 py-1'>All User</List></Link>
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
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;