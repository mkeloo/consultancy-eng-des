'use client';
import AnimatedBlobs from './AnimatedBlobs';
import Badge from './Badge';

const About = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] relative min-h-screen flex items-center justify-center  ">
      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center m-4 ">
        {/* <div className="absolute  w-72 h-72 bg-teal-200 dark:bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -z-4" /> */}
        <div className=" grid grid-cols-2 gap-4 p-12 ">
          <div className="rounded-[50px] ml-8 mb-4 w-[250px] h-[250px] overflow-hidden">
            <img
              src="/images/Hero/hero1.jpg"
              alt="Worker 1"
              className="object-cover"
            />
          </div>
          <div className="rounded-[50px] ml-8 mb-8 w-[230px] h-[230px] overflow-hidden">
            <img
              src="/images/Hero/hero1.jpg"
              alt="Worker 2"
              className="object-cover "
            />
          </div>
          <div className="rounded-[50px] w-[290px] h-[290px] overflow-hidden">
            <img
              src="/images/Hero/hero1.jpg"
              alt="Worker 3"
              className="object-cover "
            />
          </div>
          <div className="rounded-[50px] -mt-4 ml-4 overflow-hidden w-[250px] h-[250px]">
            <img
              src="/images/Hero/hero1.jpg"
              alt="Worker 4"
              className="object-cover "
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2 flex items-center justify-center p-8 m-4">
        {/* Animated Gradient Blobs */}
        {/* <AnimatedBlobs /> */}

        <div className="text-left">
          <div className="border-b-4 border-gray-800 dark:border-orange-300 mb-4 w-14" />
          <h1 className="text-5xl font-bold mb-4">
            Take A Glimpse Into Our Construction Voyage
          </h1>
          <p className="text-lg mb-8">
            A Trailblazer In The Construction Industry. Our Journey Is One Of
            Passion, Dedication, And A Relentless Pursuit Of Excellence.
          </p>
          <div className="flex justify-between">
            <div className="text-center">
              {/* <h2 className="text-4xl font-bold">600+</h2> */}
              <Badge endCountNum={10} endCountText="+" />
              <p className="text-lg">Worked With 10+ Big Companies</p>
            </div>
            <div className="text-center">
              {/* <h2 className="text-4xl font-bold">800+</h2> */}
              <Badge endCountNum={70} endCountText="+" />
              <p className="text-lg">Projects Completed Successfully</p>
            </div>
            <div className="text-center">
              {/* <h2 className="text-4xl font-bold">99%</h2> */}
              <Badge endCountNum={99} endCountText="%" />
              <p className="text-lg">We Stand With 99% Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
