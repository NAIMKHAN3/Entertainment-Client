"use client"
import React, { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

interface IAccordion {
    title: string;
    content: string;
}

const Accordion = ({ title, content }:{title:string,content:string}) => {
  const [active, setActive] = useState(false);
  return (
   
      <div
        className={`border-b-2 my-2 p-3 border-gray-500 cursor-pointer duration-300 md:w-[60%] mx-auto py-3 ${
          active && "bg-[#00246a]  text-white rounded-md"
        }`}
      >
        <div
          className="flex justify-between"
          onClick={() => setActive(!active)}
        >
          <div className="text-xl font-semibold my-3">{title}</div>
          <div className="flex items-center">
            {active ? (
              <CgMathMinus className="text-2xl font-bold bg-white text-[#00246a]" />
            ) : (
              <CgMathPlus className="text-2xl font-bold bg-[#00246a] text-white" />
            )}
          </div>
        </div>
        {active && <div className="left-7">{content}</div>}
      </div>
   
  );
};

export default Accordion;
