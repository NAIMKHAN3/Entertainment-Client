"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {

   const router = useRouter();
   router.push('/dashboard/profile')
};

export default Dashboard;