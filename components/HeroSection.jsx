'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] min-h-screen h-[90vh] flex items-center justify-center px-14 ">
      {/* Left Section */}
      <div className="lg:w-1/2 h-[90vh] -mt-20  xl:py-14 lg:py-8 flex justify-center items-center ">
        <div className="relative w-full max-w-lg ">
          {/* Text Content */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Building the Future, One Project at a Time
            </h2>
            <h1 className="text-6xl font-bold leading-tight mb-6 ">
              Expert Design & Engineering Services in <br /> Construction
            </h1>
            <p className="text-xl mb-6">
              Innovative engineering and design solutions for residential,
              commercial, and industrial construction projects.
            </p>
            <div className=" space-x-4 mb-6 gap-4 ">
              <Button className="bg-[#1A1006] text-white  dark:bg-[#F2E6D4] dark:text-[#1A1006] text-md  px-8 py-6 rounded-lg font-semibold shadow-md hover:bg-yellow-800 duration-300 mr-16 transition hover:scale-105">
                Contact Us
              </Button>
              <Button className="bg-primary dark:bg-yellow-500 text-md text-black px-8 py-6 rounded-lg font-semibold shadow-md hover:bg-yellow-800 duration-300">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-[90vh] -mt-20 pl-8 xl:py-14 lg:py-8 flex justify-center items-center">
        <img
          src="/images/Hero/hero1.jpg"
          alt="hall-hero-pic"
          className="h-[50vh] object-cover w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
