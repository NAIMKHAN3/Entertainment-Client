"use client";


import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs'

import Image from "next/image";
import Link from "next/link";

type Swiper = {
  swiper: Swiper | null;

  slidePrev: () => void;
  slideNext: () => void;
};

type SwiperRef = {
  swiper?: Swiper;
};

const HomePageBanner = () => {
  const swiperRef = useRef<SwiperRef>(null); // Use a single useRef for Swiper instance

  // Function to slide to the previous slide
  const goPrevButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to slide to the next slide
  const goNextButton = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div>
        <div className="">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper group mx-auto w-[100%]"
          >
            <SwiperSlide className="bg-[#EEEEEE] ">
              <div className="relative text-white">
                <img
                  src="https://i.ytimg.com/vi/blIJLbU33Mw/maxresdefault.jpg"
                  alt=""
                  className="h-[100vh] w-full"
             
                />
                {/* <div className="absolute left-0 top-[30%] ml-14 w-[65%]">
                  <h3 className="font-bold md:text-[35px] lg:text-[50px]">
                    Meet The Line of <br />
                    The Millenninum
                  </h3>

                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Labore fugiat aliquam voluptatibus qui deleniti modi
                  </p>

                  <div className="flex gap-5">
                    <button>click collection</button>
                    <button>Buy Now</button>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#EEEEEE] ">
              <div className="relative text-white">
                <img
                  src="https://www.koimoi.com/wp-content/new-galleries/2023/08/jailer-surpasses-rs-100-crore-on-opening-with-lifetime-gross-estimated-to-be-over-rs-500-crore.jpg"
                  alt=""
                  className="h-[100vh] w-full"
             
                />
                <div className="absolute left-0 top-[30%] ml-14 w-[65%]">
                  <h3 className="font-bold md:text-[35px] lg:text-[50px]">
                    Meet The Line of <br />
                    The Millenninum
                  </h3>

                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Labore fugiat aliquam voluptatibus qui deleniti modi
                  </p>

                  <div className="flex gap-5">
                    <button>click collection</button>
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="tranp bg-[#EEEEEE]">
              <div className="relative text-white">
                <img
                  src="https://i.ytimg.com/vi/lshAqOT7BB8/sddefault.jpg"
                  alt=""
                  className="h-[100vh] w-full"
                  width={undefined}
                />
                <div className="absolute left-0 top-[30%] ml-14 w-[65%]">
                  <h3 className=" font-bold md:text-[35px] lg:text-[50px]">
                    New Moder <br />
                    Collection
                  </h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Labore fugiat aliquam voluptatibus qui deleniti modi
                  </p>
                  <button>shop now</button>
                </div>
              </div>
            </SwiperSlide>

            <div className="mt-5 flex items-center justify-center gap-3 text-center">
              <button
                className="prev-button group-hover:bg-white absolute left-0 top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goPrevButton}
              >
                <BsArrowLeftCircle />
              </button>
              <button
                className="next-button group-hover:bg-white absolute right-0 top-[50%] z-50 mx-2 rounded-full bg-[#ffffff27] p-4 text-white duration-300 group-hover:bg-[#ffffffcb] group-hover:text-black"
                onClick={goNextButton}
              >
                <BsArrowRightCircle/>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;