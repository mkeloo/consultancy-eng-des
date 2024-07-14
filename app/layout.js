import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Design & Engineering Consultancy in Construction',
  description:
    'We are a design and engineering consultancy in construction. We provide services in architecture, engineering, and project management.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#1A1006] text-[#F2E6D4]  `}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="bg-[#1A1006] w-full sticky top-0 z-[99]">
            <Header />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
