'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4] py-16 px-8 mb-32 border-b-2">
      <div className=" mx-auto">
        <div className="border-b-4 border-yellow-500 mb-4 w-14" />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <Button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-600">
            See All
          </Button>
        </div>
        <p className="text-md font-bold mb-12">
          Just Don't Take Our Word For It. Here's What Our Clients Have To Say
        </p>
      </div>

      {/* Swiper Gallery */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="bg-[#F2E6D4] dark:bg-[#1A1006] text-[#1A1006] dark:text-[#F2E6D4]"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="flex ">
            <div className="dark:bg-[#F2E6D4] bg-[#1A1006] dark:text-[#1A1006] text-[#F2E6D4] rounded-lg shadow-md p-6 min-h-[250px] flex flex-col justify-center ">
              <p className="text-md italic mb-4 ">"{testimonial.quote}"</p>
              <div className="text-sm mt-auto">
                <div className="font-bold">{testimonial.name}</div>
                <div className="">{testimonial.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
