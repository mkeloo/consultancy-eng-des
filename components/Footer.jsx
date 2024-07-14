'use client';
import React from 'react';
import Link from 'next/link';
import { Input } from './ui/input';

export default function Footer() {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4]">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
          <div>
            <h2 className="pb-4  text-lg font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                About Us
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Press
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Careers
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h2 className="pb-4  text-lg font-semibold uppercase">
              Development
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Documentation
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Reference
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Changelog
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Status
              </Link>
            </div>
          </div>

          <div>
            <h2 className="pb-4  text-lg font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Twitter
              </Link>
              <Link href="/" className="py-1 hover:underline">
                LinkedIn
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Facebook
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="Email Address" />
            <button className="absolute dark:bg-[#F2E6D4] bg-[#1A1006] dark:text-[#1A1006] text-[#F2E6D4] border-2 font-bold rounded-full h-10 px-3 text-sm top-2 right-2 border-[#1A1006] hover:border-2 hover:border-yellow-500 hover:dark:bg-yellow-500 hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-200">
              Subscribe
            </button>
          </div>
          <p className="pt-4 text-gray-500">
            By subscribing to our newsletter, you agree to receive emails from
            us. Your personal data will be stored and processed in accordance
            with our Privacy Policy and you can unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 bg-black dark:bg-primary">
        <div className="container text-white text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0">
            <p>
              &copy; {new Date().getFullYear()} Consultancy. All Rights Reserved{' '}
            </p>
          </div>
          <div>
            <Link href="/" className="p-4 hover:underline">
              Privacy
            </Link>
            <Link href="/" className="p-4 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
