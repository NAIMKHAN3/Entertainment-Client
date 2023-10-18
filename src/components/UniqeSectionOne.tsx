import React from 'react';

const UniqeSectionOne = () => {
    return (
        <div className="w-full relative">
        <div className="flex flex-wrap pt-10 px-5 md:px-20 pb-0">
          <div className="md:w-1/2 w-full px-2 z-10 my-auto">
            <h2 className="text-xl md:text-3xl leading-tight mb-8 relative">
              Watch Thousands of Shows and Movies Anytime, Anywhere
            </h2>
            <div className="">
              <button className="uppercase bg-gray-900 text-white px-4 py-4 shadow text-sm z-30 hover:shadow-lg">
                Start Your Free Watching
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-2 flex justify-end z-10">
            <img
              className="h-auto"
              alt="Watch Thousands of shows and movies anytime, anywhere"
              src="https://www.hulu.com/static/hitch/s3/2018-01/mobile-devices-footer%402x.png"
            />
          </div>
        </div>
        <div className="block absolute w-full left-0 inset-0 top-32 md:bg-gray-300 z-0"></div>
      </div>
    );
};

export default UniqeSectionOne;