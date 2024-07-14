'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { titleVariants, tagVariants, desVariants } from '@/constants/animation';

const HeroSection = () => {
  return (
    <div className="bg-[#1A1006] text-[#F2E6D4] w-full mx-auto min-h-screen h-[90vh] flex items-center justify-center px-8 ">
      {/* Left Section */}
      <div className="lg:w-1/2 h-[90vh] -mt-20  xl:py-14 lg:py-8 flex justify-center items-center ">
        <div className="relative w-full ">
          {/* Text Content */}
          <div>
            <motion.h2
              initial="offscreen"
              whileInView={'onscreen'}
              variants={tagVariants}
              className="text-xl font-semibold mb-2"
            >
              Building the Future, One Project at a Time
            </motion.h2>
            <motion.h1
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="text-6xl font-bold leading-tight mb-6 "
            >
              Expert Design & Engineering Services in <br /> Construction
            </motion.h1>
            <motion.p
              initial="offscreen"
              whileInView={'onscreen'}
              variants={desVariants}
              className="text-xl mb-6"
            >
              Innovative engineering and design solutions for residential,
              commercial, and industrial construction projects.
            </motion.p>
            <motion.div
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className=" space-x-4 mb-6 gap-4 "
            >
              <Button className="bg-[#1A1006] text-white  dark:bg-[#F2E6D4] dark:text-[#1A1006] text-md  px-8 py-6 rounded-2xl font-semibold shadow-md hover:bg-yellow-800 duration-300 mr-16 transition hover:scale-105">
                Contact Us
              </Button>
              <Button className="bg-primary dark:bg-yellow-500 text-md text-black px-8 py-6 rounded-2xl font-semibold shadow-md hover:bg-yellow-800 duration-300">
                Request a Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2 h-[90vh] -mt-20   xl:py-14 lg:py-8 flex justify-center items-center">
        <div className="relative ml-10 w-full  flex justify-center items-center group duration-300 transition-transform ease-in-out">
          <div className="absolute h-[55vh] aspect-square w-[80%] rounded-3xl border-4 border-yellow-500 -translate-x-10 -translate-y-8 bg-yellow-500 z-[1] group-hover:rotate-45 group-hover:scale-75 group-hover:-translate-y-20 group-hover:-translate-x-24 duration-300 transition-transform ease-in-out" />
          <motion.img
            initial="offscreen"
            whileInView={'onscreen'}
            variants={titleVariants}
            src="/images/Hero/hero1.jpg"
            alt="hall-hero-pic"
            className=" h-[55vh] aspect-square object-cover w-[80%] rounded-3xl border-4 border-yellow-500 z-[2] group-hover:scale-105  duration-300 transition-transform ease-in-out group-hover:shadow-2xl group-hover:shadow-yellow-500 group-hover:backdrop-blur-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
