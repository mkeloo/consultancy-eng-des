'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { projects } from '@/constants/index';

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white text-black rounded-2xl shadow-md overflow-hidden flex justify-center items-center"
        >
          <div className="w-[35%]">
            <img
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="object-cover w-[400px] h-[215px]"
            />
          </div>
          <div className="p-6 w-[65%]">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-md mb-4 text-gray-500">{project.subtext}</p>
            <div className="flex justify-between items-center">
              <div className="text-md text-gray-500 font-normal">
                {project.category} ・ {project.time}
              </div>
              <Button
                className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600"
                onClick={() => handleOpenModal(project)}
              >
                See Details →
              </Button>
            </div>
          </div>
        </div>
      ))}

      {selectedProject && (
        <Dialog open={selectedProject !== null} onOpenChange={handleCloseModal}>
          <DialogContent className="bg-[#1A1006] text-[#F2E6D4] rounded-2xl shadow-md px-10 py-8 max-w-4xl max-h-[70vh] overflow-y-auto mt-10">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.subtext}</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover w-80 h-80  rounded-3xl shadow-lg border-4 border-yellow-500  transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p>{selectedProject.description}</p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600 text-lg"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
