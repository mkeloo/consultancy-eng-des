'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import { usePathname } from 'next/navigation';

// Components
import Logo from './Logo';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setHeader(true) : setHeader(false);
    });

    // remove Events
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);

  return (
    <header className="w-full bg-[#1A1006] sticky top-0 z-30 transition-colors duration-300 text-[#F2E6D4] py-4 px-20">
      <div className="max-w-7xl mx-auto bg-[#F2E6D4] dark:bg-[#1A1006] px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            {/* <ThemeToggler /> */}

            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
