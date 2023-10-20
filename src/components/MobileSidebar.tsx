'use client'
import { AiOutlineMenu, } from 'react-icons/ai';

import { ImCross } from 'react-icons/im';

import {AiOutlineHome} from 'react-icons/ai'
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
            <div className="lg:hidden bg-gray-200 flex items-center justify-between p-3 py-2 transition duration-700">
                <div>
                    <p
                        className="flex justify-center items-center  px-2 py-1 text-primary rounded cursor-pointer"
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
            <Link href='/dashboard/profile'  onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>My Profile</List></Link>
                {
                    role === 'SuperAdmin' && <div>
                        <Link href='/dashboard/add-admin' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Admin</List></Link>
                        <Link href='/dashboard/all-admin' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Admin</List></Link>
                        <Link href='/dashboard/add-cinema' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Cinema</List></Link>
                        <Link href='/dashboard/all-cinema' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Cinema</List></Link>
                        <Link href='/dashboard/add-category' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Category</List></Link>
                        <Link href='/dashboard/all-category' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Category</List></Link>
                        <Link href='/dashboard/add-faq' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add FAQ</List></Link>
                        <Link href="/dashboard/all-faq" onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All FAQ</List></Link>
                        <Link href='/dashboard/add-blog' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Blog</List></Link>
                        <Link href='/dashboard/all-blog' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Blog</List></Link>
                        <Link href='/dashboard/all-user' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All User</List></Link>
                        <Link href='/dashboard/all-super-admin' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Super Admin</List></Link>
                        <Link href='/dashboard/all-booking' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Booking</List></Link>
                    </div>
                }
                {
                    role === 'User' && <div>
                        <Link href='/dashboard/my-cart'  onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>My Cart List</List></Link>
                        <Link href='/dashboard/my-booking'  onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>My Booking List</List></Link>
                    </div>
                }
                {
                    role === 'Admin' && <div>
                       <Link href='/dashboard/add-admin' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Admin</List></Link>
                        <Link href='/dashboard/all-admin' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Admin</List></Link>
                        <Link href='/dashboard/add-cinema' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Cinema</List></Link>
                        <Link href='/dashboard/all-cinema' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Cinema</List></Link>
                        <Link href='/dashboard/add-category' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Category</List></Link>
                        <Link href='/dashboard/all-category' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Category</List></Link>
                        <Link href='/dashboard/add-faq' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add FAQ</List></Link>
                        <Link href="/dashboard/all-faq" onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All FAQ</List></Link>
                        <Link href='/dashboard/add-blog' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>Add Blog</List></Link>
                        <Link href='/dashboard/all-blog' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Blog</List></Link>
                        <Link href='/dashboard/all-user' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All User</List></Link>
                        <Link href='/dashboard/all-super-admin' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Super Admin</List></Link>
                        <Link href='/dashboard/all-booking' onClick={()=> dispatch(sidebarFalse())}><List className='border pl-3 py-1'>All Booking</List></Link>
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
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;