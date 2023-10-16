"use client"
import Accordion from '@/components/Accordion';
import React from 'react';

const FAQ = () => {
    let accordionData = [
        {
          titel: "When will my order ship?",
          content:
            "After your payment is verified, it takes up to 24 hours to proces and ship your order. This does not include weekends or holidays.Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.",
        },
        {
          titel: "I need to change something on my order. How can I do that?",
          content:
            "After your payment is verified, it takes up to 24 hours to proces and ship your order. This does not include weekends or holidays.Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.",
        },
        {
          titel: "Is there a warranty? ",
          content:
            "After your payment is verified, it takes up to 24 hours to proces and ship your order. This does not include weekends or holidays.Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.",
        },
        {
          titel: "Are MVMT watches waterproof?",
          content:
            "After your payment is verified, it takes up to 24 hours to proces and ship your order. This does not include weekends or holidays.Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.",
        },
        {
          titel: "What type of leather is used?",
          content:
            "After your payment is verified, it takes up to 24 hours to proces and ship your order. This does not include weekends or holidays.Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.",
        },
      ];
    return (
        <div className='p-3'>
           <h1 className="text-3xl mt-7 font-dm font-bold text-center">
          GENERAL QUESTIONS
        </h1>
        <p className="text-center mb-5 text-base text-[#6f6f6f]">
          SHIPPING & PAYMENT INFORMATION
        </p>
        {accordionData.map((item) => (
          <Accordion title={item.titel} content={item.content} />
        ))}
        </div>
    );
};

export default FAQ;