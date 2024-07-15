'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TbArrowUpRight } from 'react-icons/tb';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  //   const [agreed, setAgreed] = useState(false);

  return (
    <div className=" bg-[#100a04] text-[#F2E6D4] h-auto px-6 py-28 lg:px-8 border-2 rounded-3xl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything.
        </p>
      </div>

      <form className="mx-auto mt-14 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <Input type="name" id="firstname" placeholder="First Name" />
          </div>

          <div className="mt-2.5">
            <Input type="name" id="lastname" placeholder="Last Name" />
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="email" id="email" placeholder="Email Address" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="tel" id="phoneNumber" placeholder="Phone Number" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea placeholder="Type your message here..." />
            </div>
          </div>

          <div className="sm:col-span-2 flex justify-center mt-6 ">
            <Button
              type="submit"
              className="flex w-full sm:w-auto items-center bg-[#1A1006] text-white dark:bg-[#F2E6D4] dark:text-[#1A1006] text-md px-16 py-6 rounded-2xl font-semibold shadow-md duration-300 transition hover:scale-105 hover:dark:bg-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Let's Talk
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
