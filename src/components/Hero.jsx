import React from 'react';
import ProfilePic from '../assets/pic.jpg';

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Rodrigo Alves</h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
              bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front-end Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className=" h-96  rounded-lg"
              src={ProfilePic}
              alt="Profile Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
