import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] ">
      <div className="bg-[url('/images/Team/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          What do we offer?
        </h1>
      </div>

      <div className="max-w-7xl mx-auto my-24 mb-32">
        <Services />
      </div>
    </div>
  );
};
export default ServicesPage;
