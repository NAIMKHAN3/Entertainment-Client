"use client"
import { useAddCartMutation } from '@/redux/feature/cart/cartApi';
import { useGetCinemaByIdQuery } from '@/redux/feature/cinema/cinemaApi';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa"
import { BiSolidStar } from "react-icons/bi"

import Image from "next/image";

const CinemaDetails = ({ params }: any) => {
    const cinemaid = params?.cinemaId;
    const [addCart] = useAddCartMutation();
    const { data, isLoading } = useGetCinemaByIdQuery(cinemaid)
    if (isLoading) {
        return <h1 className='text-center mt-10'>Loading...</h1>
    }
    const {id, image, rating, realeaseDate, category, name, producerName, productionManager, price, description } = data?.data || {};
    console.log(data)

    const addCartToDb = async (id: string) => {
        try {
            const { success, message } = await addCart({ cenemaId: id }).unwrap()
            if (success) {
                toast.success(message)
            }
        }
        catch (err: any) {
            toast.error(err?.data?.message)
        }
    }
    const SwiperButtonNext = () => {
        const swiper = useSwiper();
        return (
            <button className="text-2xl " onClick={() => swiper.slideNext()}>
                <FaLongArrowAltRight />
            </button>
        );
    };
    const SwiperButtonPrev = () => {
        const swiper = useSwiper();
        return (
            <button className="text-2xl" onClick={() => swiper.slidePrev()}>
                <FaLongArrowAltLeft />
            </button>
        );
    };
    return (
        <div className='p-5'>
            <Toaster />
            <div className='grid grid-cols-2 gap-3'>
                <div className=''>
                    <img className='h-96 w-full' src={image} alt="" />
                </div>
                <div className='border p-5 rounded-md'>
                    <h1 className='text-2xl text-center font-semibold my-5 text-[#00246a]'>Movie Information</h1>
                    <div className='grid grid-cols-2 my-3'>
                        <h1>
                            <span className=' font-semibold'>Movie Name: </span>{name}
                        </h1>
                        <h1 className=''>
                        <span className=' font-semibold'>Production Manager: </span> {productionManager}
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 my-3'>

                        <h1>
                        <span className='font-semibold'>Price: </span> {price}
                        </h1>
                        <h1 className=''>
                        <span className=' font-semibold'>Producer Name: </span> {producerName}
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 my-3'>

                        <h1>
                        <span className=' font-semibold'>Realease Date: </span> {realeaseDate}
                        </h1>
                        <h1 className=''>
                        <span className=' font-semibold'>Category: </span> {category?.name}
                        </h1>
                    </div>
                    <div>
                        <h1> <span className=' font-semibold mt-2'>Description: </span> {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio distinctio sint, voluptates soluta quia sit explicabo facilis nesciunt ratione repellat laborum harum! Provident in deleniti quaerat fugit magnam ratione modi!</h1>
                    </div>
                   
                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            <Link href={`/cinema/booking/${id}`}><button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white'>Booking</button></Link>
                            <button className='w-full bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white' onClick={() => addCartToDb(id)} >Add Cart</button>
                        </div>
                    
                </div>
            </div>
            <div className=''>
            <div className='flex justify-center gap-5 mt-5'>
            <h1 className='text-center font-semibold text-2xl mt-5'>Reviews : {rating?.length}</h1>
            <Link href={`/cinema/rating/${id}`}><button className='mt-5  bg-[#00246a] hover:bg-white border border-[#00246a] hover:text-[#00246a] duration-200 px-2 py-1 rounded-md text-white' >Add Review</button></Link>
            </div>
                
                <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            modules={[Navigation]}
            className="w-full h-full flex flex-col"
        >
            {
                rating?.map((rating: any) => <SwiperSlide key={rating.id}>
                    <div className="container px-5 md:px-10 py-10 mx-auto ">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 w-full h-80">
                                <div className="h-full bg-gray-100 shadow-lg  p-8 rounded border-r-2 border-[#00246a]">
                                    <svg
                                    
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="block w-5 h-5 text-[#00246a] mb-4"
                                        viewBox="0 0 975.036 975.036"
                                    >
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6">
                                        {rating?.comment}
                                    </p>
                                    <a className="inline-flex items-center">
                                        <Image
                                            width={30}
                                            height={30}
                                            alt="testimonial"
                                            src={rating?.user?.profileImg}
                                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <p className="text-primary font-inter border-none text-sm text-right font-bold flex items-center gap-2 ">
                                                {Array.from({ length: rating.rating }, (_, index) => (
                                                    <span className='text-yellow-500' key={index}><BiSolidStar/> </span>
                                                ))}
                                                {rating?.rating}
                                            </p>
                                            <span className="title-font font-semibold text-[#00246a]">
                                                {rating?.user?.name}
                                            </span>
                                            <span className="text-gray-500 text-sm">{rating?.user?.role}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }


            <div className="flex items-center justify-end gap-5 mb-5 pr-5 md:pr-10">
                <SwiperButtonPrev />
                <SwiperButtonNext />
            </div>
        </Swiper>
            </div>
        </div>
    );
};

export default CinemaDetails;