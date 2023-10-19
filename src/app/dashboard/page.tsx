"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {

   const router = useRouter();
   if(typeof window !== "undefined"){
  
      router.push('/dashboard/profile')
   }
};

export default Dashboard;