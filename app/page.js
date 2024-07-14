import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-[#1A1006] text-[#F2E6D4]">
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
