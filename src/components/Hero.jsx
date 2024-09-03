import React from 'react';
import profilePic from '../assets/pic.jpg';

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
              Eu sou um desenvolvedor front-end apaixonado por tecnologia.
              Busco sempre aprender coisas novas e me aprimorar cada vez mais.
              Tenho experiência com React, Tailwind CSS, Docker, Python, Node.js,
              e no momento tentando aprimorar o meu TypeScript e Next.js.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className=" h-96  rounded-lg"
              src={profilePic}
              alt="Profile Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
