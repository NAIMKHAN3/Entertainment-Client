import Link from 'next/link';
import React from 'react';

const UniqeSectionOne = () => {
    return (
        <div className="w-full border max-w-6xl mx-auto rounded-md border-[#00246a]">
          <h1 className='uppercase text-center font-semibold text-2xl text-[#00246a] py-5 border-b border-[#00246a]'>Watching Movie</h1>
        <div className="flex flex-wrap px-5 md:px-20 pb-0">
          <div className="md:w-1/2 w-full px-2 z-10 my-auto">
            <h2 className="text-xl md:text-3xl leading-tight mb-8 ">
              Watch Thousands of Shows and Movies Anytime, Anywhere
            </h2>
            <div className="">
              <Link href='/cinema'><button className="uppercase rounded-md bg-[#00246a] text-white px-4 py-4 shadow text-sm z-30 hover:shadow-lg">
                Start Your Free Watching
              </button></Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-2 flex justify-end z-10">
            {/* <img
              className="h-auto"
              alt="Watch Thousands of shows and movies anytime, anywhere"
              src="https://www.hulu.com/static/hitch/s3/2018-01/mobile-devices-footer%402x.png"
            /> */}
            <img
              className=""
              alt="Watch Thousands of shows and movies anytime, anywhere"
              src="https://i.ibb.co/Xy8L4bX/fpdl-in-movie-theater-signboard-blue-34230-295-normal-removebg-preview.png"
            />
          </div>
        </div>
        {/* <div className="w-full left-0 inset-0 border z-0"></div> */}
      </div>
    );
};

export default UniqeSectionOne;