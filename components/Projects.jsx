'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: '01',
    title: 'Interiors Designs',
    subtext:
      'Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.',
    category: 'Interior',
    time: 'Aug 2022',
    image: '/images/Hero/hero1.jpg', // Replace with the actual image path
  },
  {
    id: '02',
    title: 'Residential Building',
    subtext:
      'Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.',
    category: 'Building',
    time: 'Aug 2022',
    image: '/images/Hero/hero1.jpg', // Replace with the actual image path
  },
  {
    id: '03',
    title: 'Commercial Complex',
    subtext:
      'Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.',
    category: 'Complex',
    time: 'Aug 2022',
    image: '/images/Hero/hero1.jpg', // Replace with the actual image path
  },
  {
    id: '04',
    title: 'Structural Repair',
    subtext:
      'Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.',
    category: 'Complex',
    time: 'Aug 2022',
    image: '/images/Hero/hero1.jpg', // Replace with the actual image path
  },
];

const Projects = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] py-16 px-24">
      <div className="container mx-auto">
        <div className="border-b-4 border-yellow-500 mb-4 w-14" />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold">Recent Projects</h2>
          <Button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600">
            See All
          </Button>
        </div>
        <p className="text-md font-bold mb-12">
          Recent Projects Showcasing Our Craftsmanship And Innovation In
          Construction
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden flex justify-center items-center"
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="object-cover w-[500px] h-[215px] "
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-md mb-4 text-gray-500 ">{project.subtext}</p>
                <div className="flex justify-between items-center">
                  <div className="text-md  text-gray-500 font-bold">
                    {project.category} ・ {project.time}
                  </div>
                  <Button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600">
                    →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
