'use client';

// Hooks
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'home' },
  { path: '/', name: 'home' },
  { path: '/', name: 'home' },
  { path: '/', name: 'home' },
  { path: '/', name: 'home' },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav>
      <div>
        <h1>Navbar</h1>
      </div>
    </nav>
  );
};
export default Navbar;
