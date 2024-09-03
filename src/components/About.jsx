import React from 'react';
import code from '../assets/code.jpg';

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        {' '}
        <span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Me
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={code} alt="about me" className="rounded-2xl" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-lg">
              Eu sou apaixonado por tecnologia e sempre busco aprender coisas novas.
              Eu tenho paixao pela area de front-end, gosto de jogos e assistir filmes,
              eu trabalho com React e Tailwind CSS, começando a aprender TypeScript e Next.js.
              Comecei a programar em 2020 e em 2023 fui pra Trybe aonde me formei em
              Desenvolvimento Web Full Stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
