'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import blob from '@/public/images/CTA/blob.svg';

const CallToAction = () => {
  return (
    <div className=" h-[50vh] bg-[#1A1006] text-[#F2E6D4]  py-16  flex items-center justify-between px-8 mt-20 mb-20 ">
      <div className="w-[55%] ">
        <div className="border-b-4 border-yellow-500 mb-4 w-14" />
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg mb-8">
          Contact Us If You Have Anything In Mind, We Will Help You Build.
        </p>
        <div className=" space-x-4 mb-6 gap-4 ">
          <Button className="bg-[#F2E6D4] text-[#1A1006] text-md  px-8 py-6 rounded-2xl font-semibold shadow-md  duration-300 mr-16 transition hover:scale-105">
            Contact Us
          </Button>
          <Button className="bg-yellow-500 text-md text-black px-8 py-6 rounded-2xl font-semibold shadow-md  duration-300 transition  hover:scale-105">
            Request a Quote
          </Button>
        </div>
      </div>
      <div className="relative w-[45%] flex justify-center items-center group duration-300 transition-transform ease-in-out">
        <img
          src="/images/CTA/blob.svg"
          alt="blob"
          className="absolute h-100 w-100 z-[1]  group-hover:scale-95 group-hover:-translate-y-20 group-hover:translate-x-6 group-hover:rotate-180 duration-300 transition-transform ease-in-out"
        />

        <div className="relative w-80 h-80 ml-10 mb-10 z-[2]">
          <Image
            src="/images/CTA/CTA.jpeg"
            alt="worker"
            layout="fill"
            objectFit="cover"
            className="border-4 border-yellow-500 rounded-3xl group-hover:scale-110  duration-300 transition-transform ease-in-out group-hover:shadow-2xl group-hover:shadow-yellow-500 group-hover:backdrop-blur-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
