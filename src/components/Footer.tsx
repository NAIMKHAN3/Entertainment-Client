"use client"


import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineMail,
} from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#00246a] p-5 mt-10">
      <div className="max-w-[80%] my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="mx-auto">
            <h1 className="text-2xl font-semibold mt-5 text-white">
              Entertainment Hall
            </h1>
            <p className="text-white mt-5 font-semibold">
            Entertainment Hall started life as a business lines and calls
              provider in Birmingham City Centre, we moved our offices to
              Halesowen in 2012. We expanded over the following years to cover
              all forms of business communications and gained customers from all
              over the UK.
            </p>
            <div className="flex my-5">
              <span className="bg-white rounded-full text-[#00246a] p-0.5 text-3xl  mr-3 hover:text-indigo-500 duration-300 cursor-pointer">
                <BsFacebook />
              </span>
              <span className="bg-white rounded-full text-[#00246a] p-0.5 text-3xl  mr-3 hover:text-indigo-500 duration-300 cursor-pointer">
                <AiFillTwitterCircle />
              </span>
              <span className="bg-white rounded-full text-[#00246a] p-0.5 text-3xl mr-3 hover:text-red-600 cursor-pointer">
                <AiFillYoutube />
              </span>
            </div>
          </div>
          <div className="text-white md:mx-auto mt-4">
            <h1 className="text-xl font-semibold text-white px-2"> Menu</h1>
            <ul>
              <li className="flex justify-between items-center cursor-pointer mb-2 mt-5 hover:scale-125 hover:bg-white hover:text-[#00246a] duration-300 rounded-md px-3">
                <Link href="/about">About</Link>
              </li>
              <li className="flex justify-between items-center cursor-pointer my-2 hover:scale-125 hover:bg-white hover:text-[#00246a] duration-300 rounded-md px-3">
                <Link href="/cinema">Cinema</Link>
              </li>
              <li className="flex justify-between items-center cursor-pointer my-2 hover:scale-125 hover:bg-white hover:text-[#00246a] duration-300 rounded-md px-3">
                <Link href="/blog">Blog</Link>
              </li>
              
             
            </ul>
          </div>
          <div className="text-white md:mx-auto">
            <h1 className="text-xl font-semibold text-white mt-5">
              Contact Us
            </h1>
            <div className="mt-10 flex">
              <span className="">
                <MdOutlineLocationOn className="text-3xl bg-white text-[#00246a] rounded-full p-2  mr-3" />
              </span>
              <h1 className="font-semibold">
              Entertaiment Group Ltd,
                <br /> Commercial House, 21a Stone Street,
                <br /> Dudley, West Midlands, DY1 1NJ
              </h1>
            </div>

            <div className="mt-5 flex">
              <span className=" ">
                <MdOutlinePhoneInTalk className="text-3xl bg-white text-[#00246a] p-2 rounded-full mr-3" />
              </span>
              <h1 className="font-semibold">0800 849 8585</h1>
            </div>
            <div className="mt-5 flex">
              <span className=" ">
                <MdOutlineMail className="text-3xl bg-white text-[#00246a] p-2 rounded-full mr-3" />
              </span>
              <h1 className="font-semibold">entertaiment@hall.com</h1>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-white mt-10" />
        <h1 className="font-semibold text-center mt-3 text-white">
          © 2023 Entertaiment Group Holdings Ltd. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
