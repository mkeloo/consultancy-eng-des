import Projects from '@/components/Projects';
import ProjectsModal from '@/components/ProjectsModal';

const ProjectsPage = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4]">
      <div className="bg-[url('/images/Team/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Our Work
        </h1>
      </div>

      <div className="max-w-7xl mx-auto mb-32 mt-14">
        {/* <Projects /> */}
        <div className="bg-[#1A1006] text-[#F2E6D4] py-16 px-8 ">
          <div className="">
            <div className="border-b-4 border-yellow-500 mb-4 w-14" />

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-4xl font-bold">Recent Projects</h2>
            </div>
            <p className="text-md font-normal mb-12">
              Recent Projects Showcasing Our Craftsmanship And Innovation In
              Construction
            </p>
          </div>
          <ProjectsModal />
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
