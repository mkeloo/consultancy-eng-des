'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbArrowUpRight } from 'react-icons/tb';

const About = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4]">
      <div className="bg-[url('/images/Team/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <h2 className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
            We have great idea & Interior Design
          </h2>
          <p className="text-2xl text-center font-medium pb-10 mt-5">
            Our interior design company is a company that provides interior
            design services for homes, offices, apartments, and others. We
            provide the best interior design services for you. We have a team
            that is experienced in the field of interior architecture.
          </p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          {/* Left Image Section */}
          <div className="w-full">
            <Image
              src="/images/Team/gallery1123.jpg"
              width={700}
              height={700}
              alt="gallery"
            />
          </div>

          {/* Right Content Section */}
          <div>
            <p className="pb-8 tracking-wide mt-6">
              We are an international Architects. We believe that today it is
              fundamental to totally rethink architechtural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production, and portofolio, the unfolding box allows
              portfolio sheets <br /> <br />
              We are an international Architects. We believe that today it is
              fundamental to totally rethink architechtural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production, and portofolio, the unfolding box allows
              portfolio sheets <br /> <br />
              <span className="text-xl font-extrabold tracking-light">
                The backpiperARCH, we share a belief in the transformational
                power of people united in a common purpose.
              </span>
            </p>
            <Button className="bg-[#1A1006] text-white  dark:bg-[#F2E6D4] dark:text-[#1A1006] text-md  px-8 py-6 rounded-lg font-semibold shadow-md hover:bg-yellow-800 duration-300 mr-16 transition hover:scale-105 hover:dark:bg-yellow-500">
              Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Team Section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-wider text-center uppercase"></h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            {/* Profile 1 */}
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-[#32210F] -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 duration-300 ease-in-out">
                <Image
                  src="/images/Team/profile1.jpg"
                  width={200}
                  height={200}
                  alt="profile1"
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>

            {/* Profile 2  */}
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-[#32210F] -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 duration-300 ease-in-out">
                <Image
                  src="/images/Team/profile2.jpg"
                  width={200}
                  height={200}
                  alt="profile2"
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="border-2 border-primary">
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-[#32210F] -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3 duration-300 ease-in-out">
                <Image
                  src="/images/Team/profile3.jpg"
                  width={200}
                  height={200}
                  alt="profile3"
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
