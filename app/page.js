import HeroSection from '@/components/HeroSection';
import StatsAbout from '@/components/StatsAbout';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto w-full bg-[#1A1006] text-[#F2E6D4] ">
      <HeroSection />
      <StatsAbout />
      <Services />
      <Projects />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
