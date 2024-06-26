'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className=" h-[50vh] bg-[#1A1006] text-[#F2E6D4]  py-16  flex items-center justify-between px-14 ">
      <div className="w-[55%] ml-16 px-8">
        <div className="border-b-4 border-yellow-500 mb-4 w-14" />
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg mb-8">
          Contact Us If You Have Anything In Mind, We Will Help You Build.
        </p>
        <div className=" space-x-4 mb-6 gap-4 ">
          <Button className="bg-[#F2E6D4] text-[#1A1006] text-md  px-8 py-6 rounded-lg font-semibold shadow-md  duration-300 mr-16 transition hover:scale-105">
            Contact Us
          </Button>
          <Button className="bg-yellow-500 text-md text-black px-8 py-6 rounded-lg font-semibold shadow-md  duration-300 transition  hover:scale-105">
            Request a Quote
          </Button>
        </div>
      </div>
      <div className="w-[45%] flex justify-center items-center">
        <div className="relative w-64 h-64">
          <Image
            src="/images/CTA/CTA.jpeg"
            alt="worker"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
