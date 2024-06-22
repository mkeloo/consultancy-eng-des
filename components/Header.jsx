'use client';
import React from 'react';
import ThemeToggler from './ThemeToggler';
import Logo from './Logo';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  return (
    <header>
      <div>
        <div className="container mx-auto">
          {/* Logo Section */}
          <div className="flex items-center justify-between">
            <Logo />
          </div>
          <div>
            {/* Navbar */}
            <Navbar />
            {/* Theme Toggler */}
            <ThemeToggler />

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
