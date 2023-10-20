"use client";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa"
import { BiSolidStar } from "react-icons/bi"

import Image from "next/image";
import { useGetRatingsQuery } from "@/redux/feature/rating/ratingApi";

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

export default function TestimonialCarousel() {
    const { data, isLoading } = useGetRatingsQuery(undefined)
    if (isLoading) {
        return <h1 className="text-center my-5 ">Loading...</h1>
    }
    return (
        <>
        <h1 className="uppercase text-center font-semibold text-3xl text-[#00246a] py-5">Reviews: {data?.data?.length}</h1>
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              loop={true}
            modules={[Navigation, Autoplay]}
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
           
            className="max-w-6xl mx-auto h-full flex flex-col"
        >
            {
                data?.data?.map((rating: any) => <SwiperSlide key={rating.id}>
                <div className="container py-10 mx-auto ">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full">
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
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover border border-[#00246a] p-2 object-center"
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


            {/* <div className="flex items-center justify-end gap-5 mb-5 pr-5 md:pr-10">
                <SwiperButtonPrev />
                <SwiperButtonNext />
            </div> */}
        </Swiper>
        </>
    );
}