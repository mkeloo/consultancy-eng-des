import { TbArrowNarrowRight } from 'react-icons/tb';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Services() {
  const items = [
    {
      id: '01',
      category: 'DESIGN',
      title: 'Innovative Design Solutions',
      image: '/images/Hero/hero1.jpg',
      description:
        'Cutting-edge designs for residential, commercial, and industrial spaces, tailored to your needs.',
    },
    {
      id: '02',
      category: 'CONSTRUCTION',
      title: 'Quality Construction Services',
      image: '/images/Hero/hero1.jpg',
      description:
        'Excellence in construction, ensuring quality and durability for all project types.',
    },
    {
      id: '03',
      category: 'CONSULTATION',
      title: 'Professional Consultation',
      image: '/images/Hero/hero1.jpg',
      description:
        'Expert guidance through every phase of your construction project.',
    },
    {
      id: '04',
      category: 'MISCELLANEOUS',
      title: 'Custom Construction Solutions',
      image: '/images/Hero/hero1.jpg',
      description:
        'Tailored solutions for unique construction needs, providing custom approaches to challenging projects.',
    },
  ];

  return (
    <div className="bg-[#1A1006] text-[#F2E6D4] py-16  flex flex-col items-center justify-center">
      <div className="w-full mx-auto px-8">
        <div className="border-b-4 border-yellow-500 mb-4 w-14" />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <Button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600">
            See All
          </Button>
        </div>
        <p className="text-md font-normal mb-12">
          Our Services Are Tailored To Meet Your Needs. Here's What We Offer
        </p>
      </div>
      <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x ">
        {items.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            <div>
              <Image
                src={item.image}
                width={380}
                height={100}
                alt={item.title}
                className="w-full"
              />
            </div>

            <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
              <div className="flex justify-between pb-4">
                <p className="text-sm">{item.category}</p>
                <span className="text-sm">{item.id}</span>
              </div>
              <a href="" className="block text-xl font-semibold">
                {item.title}
              </a>
              <p className="py-4">{item.description}</p>
              <a href="" className="inline-flex items-center font-medium">
                See Details <TbArrowNarrowRight className="ml-2" />
              </a>
            </div>

            <div className="inset-0 bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
              <p className="tracking-wider -rotate-90">{item.category}</p>
              <span>{item.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
