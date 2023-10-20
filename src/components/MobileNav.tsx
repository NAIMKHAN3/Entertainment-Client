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
import { removeUser } from '@/redux/feature/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';


const MobileNavbar = () => {
    const { email, name, profileImg } = useAppSelector(state => state.auth)

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch()

    const toggleIsOpen = () => {
        setIsOpen((value) => !value);
    };
    const logout = () => {
        dispatch(removeUser())
        toggleIsOpen()
        toast.success('Logout Success')
    }
    return (
        <>
            <Toaster />
            <div className="lg:hidden bg-gray-200 mt-2 px-5 flex items-center justify-between py-2 transition duration-700">
                <div className="flex justify-center items-center">
                    <Link href='/'>
                        <div className='flex items-center'>
                            <img className='h-8 w-8' src="https://wop-files.s3.us-west-2.amazonaws.com/cinema-logo.png" alt="" />
                            <h1 className='text-xs sm:text-xl font-semibold uppercase ml-2 text-[#00246a]'>Entertainment</h1>
                        </div>
                    </Link>
                </div>


                <div>
                    <p
                        className="flex justify-center items-center px-2 py-1 text-primary rounded cursor-pointer"
                        onClick={toggleIsOpen}
                    >
                        <span>
                            <AiOutlineMenu className="text-2xl mr-1" />
                        </span>
                    </p>
                </div>
            </div>
            <div className="lg:hidden">
                <div
                    className={`absolute top-0 duration-700   ${isOpen ? "left-0 duration-700" : "left-[-1200px]"
                        } z-30 bg-white w-full p-3 min-h-screen`}>
                    <p className={` absolute top-5 right-2  text-[#00246a] py-1 cursor-pointer`}
                        onClick={toggleIsOpen}>
                        <span>
                            <ImCross className="text-xl  mr-1" />
                        </span>
                    </p>
                    {
                        profileImg ? <div className='border-b pb-5'>
                            <div className='flex justify-center my-3'>
                                <img className='w-24 h-24 rounded-full border p-1 border-[#00246a]' src={profileImg as string} alt="" />
                            </div>
                            <h1 className='text-center text-lg text-[#00246a] font-semibold'>Name : {name}</h1>
                        </div> : null
                    }
                    <div className='text-[#00246a]'>
                        <Link href='/'><Paragraph className={" mt-5 border-b"}> <span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Home</span> </Paragraph></Link>
                        <Link href='/cinema'><Paragraph className={"mt-5 border-b"}><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Cinema</span> </Paragraph></Link>
                        <Link href='/blog'><Paragraph className={"mt-5 border-b"}><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Blog</span> </Paragraph></Link>
                        <Link href='/about'><Paragraph className={"mt-5 border-b"}><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>About</span> </Paragraph></Link>
                        <Link href='/faq'><Paragraph className={"mt-5 border-b" }><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>FAQ</span> </Paragraph></Link>
                        {
                            email ? <>

                                <Link href='/dashboard/profile'><Paragraph className={"mt-5 pb-2 border-b"}><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Dashboard</span></Paragraph></Link>
                                <button onClick={logout} className={"mr-5 font-semibold hover:bg-[#0874c4] mt-5 border border-[#0874c4] duration-300 text-[#0874c4] bg-white hover:text-white px-4 py-2 rounded-md"}>Log out</button>
                            </>
                                : <>
                                    <Link href='/signin'><Heading className={"mt-5 border-b"}><span className='hover:bg-white font-semibold hover:text-[#0874c4] duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Sign In</span></Heading></Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;