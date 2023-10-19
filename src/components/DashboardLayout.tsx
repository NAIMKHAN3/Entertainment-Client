"use client"
import React from 'react';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import { getInfoToLocal } from '@/share';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    const token = getInfoToLocal('token');
    const router = useRouter()
    if(!token){
        if(typeof window !== "undefined"){
  
            router.push('/signin')
        }
    }
    return (
        <div className='lg:flex '>
                    <div className='lg:w-[20%] p-5'>
                        <Sidebar />
                        <MobileSidebar/>
                    </div>
                    <div className='lg:w-[80%] p-5'>

                        {children}
                    </div>
                    </div>
    );
};

export default DashboardLayout;