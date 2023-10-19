import { useAddCartMutation } from '@/redux/feature/cart/cartApi';
import { getInfoToLocal } from '@/share';
import { ICinema } from '@/types/interface';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { json } from 'stream/consumers';

const Cart = ({ cinema }: { cinema: ICinema }) => {
    const [addCart] = useAddCartMutation();
const router = useRouter()
const token = getInfoToLocal('token')
const user = getInfoToLocal('user')

    const addCartToDb = async (id: string) => {
        try {
            if(!token){
                if(typeof window !== "undefined"){
                    router.push('/signin')
                }
            }else if(user?.role && user.role !== 'User'){
                toast.error(`Your are ${user.role}`)
            } else{
                const { success, message } = await addCart({ cenemaId: id }).unwrap()
                if (success) {
                    toast.success(message)
                }
            }
            
        }
        catch (err: any) {
            toast.error(err?.data?.message)
        }
    }
    return (
        <div className='border shadow-lg p-3'>
            <Toaster />
            <img className='h-52 w-full' src={cinema.image} alt="" />
            <div className='my-2 font-semibold'>
                <h1>Movie Name : {cinema.name}</h1>
                <div className='flex justify-between items-center my-2'>
                <h1>Price : {cinema.price}</h1>
                <h1>Category : {cinema?.category?.name || cinema?.category}</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 my-2'>
                <Link href={`/cinema/${cinema.id}`}><button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white'>Details</button></Link>
                <button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white' onClick={()=> addCartToDb(cinema.id)} >Add Cart</button>
            </div>
        </div>
    );
};

export default Cart;