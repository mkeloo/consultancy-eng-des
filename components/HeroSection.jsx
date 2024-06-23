'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="bg-[#f0fff0]  min-h-screen h-[90vh] flex items-center justify-center px-16">
      {/* Left Section */}
      <div className="lg:w-1/2 h-[90vh] pl-8 xl:py-14 lg:py-8">
        <div className="relative w-full max-w-lg">
          {/* Animated Gradient Blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

          {/* <div className="m-8 relative space-y-4">
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1">
                <div className="h-4 w-48 bg-gray-300 rounded"></div>
              </div>
              <div>
                <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
              </div>
            </div>
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1">
                <div className="h-4 w-56 bg-gray-300 rounded"></div>
              </div>
              <div>
                <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
              </div>
            </div>
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1">
                <div className="h-4 w-44 bg-gray-300 rounded"></div>
              </div>
              <div>
                <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
              </div>
            </div>
          </div> */}

          {/* Text Content */}
          <div>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Crafting <br />
              Architectural <br />
              Wonders
            </h1>
            <p className="text-xl mb-6">
              Your Ideas & Dreams Are Transformed By Us Into Long-Lasting,
              Engineered Buildings.
            </p>
            <div className="flex space-x-4 mb-6">
              <Button className="bg-teal-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-600">
                Contact Us
              </Button>
              <Button className="border-2 bg-teal-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-600">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <Image
          src="/images/Hero/hero1.jpg"
          width={800}
          height={500}
          alt="hall-hero-pic"
          className="p-16"
        />
      </div>
    </div>
  );
};
export default HeroSection;
