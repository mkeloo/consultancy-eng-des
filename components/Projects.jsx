'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import ProjectsModal from '@/components/ProjectsModal';

const Projects = () => {
  return (
    <div className="bg-[#1A1006] text-[#F2E6D4] py-16 px-8 border-b-2">
      <div className="max-w-7xl mx-auto">
        <div className="border-b-4 border-yellow-500 mb-4 w-14" />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold">Recent Projects</h2>
          <Button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600">
            See All
          </Button>
        </div>
        <p className="text-md font-normal mb-12">
          Recent Projects Showcasing Our Craftsmanship And Innovation In
          Construction
        </p>
        
        <ProjectsModal />
      </div>
    </div>
  );
};

export default Projects;
