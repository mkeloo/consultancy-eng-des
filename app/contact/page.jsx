'use client';
import { motion } from 'framer-motion';
import { slideInRightVariants, slideInVariants } from '@/constants/animation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TbArrowUpRight } from 'react-icons/tb';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ContactPage = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] ">
      <div className="bg-[url('/images/Team/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          How to reach us?
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex h-full w-full mb-40 mt-32 gap-x-10 px-8 items-stretch">
        <div className="w-1/2 ">
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={slideInVariants}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="/images/Contact/contact-image.png"
              alt="Contact"
              className="rounded-3xl shadow-lg w-full h-full object-cover border-4 border-yellow-500 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:shadow-yellow-500 hover:backdrop:blur-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={slideInRightVariants}
          className="w-1/2 h-full flex items-center"
        >
          <div className="w-full h-full">
            <div className="bg-[#100a04] text-[#F2E6D4] h-full px-6 py-32 lg:px-8 border-4 rounded-3xl flex flex-col justify-center">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Contact Sales
                </h2>
                <p className="mt-2 text-lg leading-8 text-muted-foreground">
                  Please feel free to ask anything.
                </p>
              </div>

              <form className="mx-auto mt-14 max-w-xl sm:mt-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="mt-2.5">
                    <Input
                      type="name"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="mt-2.5">
                    <Input type="name" id="lastname" placeholder="Last Name" />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <Input
                        type="tel"
                        id="phoneNumber"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <Textarea placeholder="Type your message here..." />
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex justify-center mt-8">
                    <Button
                      type="submit"
                      className="flex w-full sm:w-auto items-center bg-[#1A1006] text-white dark:bg-[#F2E6D4] dark:text-[#1A1006] text-md px-16 py-6 rounded-2xl font-semibold shadow-md duration-300 transition hover:scale-105 hover:dark:bg-yellow-500 hover:bg-yellow-500 hover:text-black"
                    >
                      Let's Talk
                      <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ContactPage;
