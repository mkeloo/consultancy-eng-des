import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CallToAction />
    </>
  );
}
