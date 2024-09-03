import React from 'react';
import calculator from '../assets/calculator.jpg';
import travel from '../assets/travel.jpg';
import sixPack from '../assets/sixpack.jpg';
import sixPack2 from '../assets/sixpack2.jpg';

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Projects
      </h2>
      <div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <div className="w-full lg:w-1/4">
            <img src={calculator} width={250} height={250} alt="project calculator" />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold"> Calculator </h6>
            <p className="mb-4 text-neutral-400"> Um projeto de uma calculadora funcional feito em React </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              REACT
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <div className="w-full lg:w-1/4">
            <img src={travel} width={250} height={250} alt="project calculator" />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold"> Travel </h6>
            <p className="mb-4 text-neutral-400"> Projeto de um site de Viagens responsivo feito em React</p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              REACT
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <div className="w-full lg:w-1/4">
            <img src={sixPack} width={250} height={250} alt="project calculator" />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold"> SixPack Site </h6>
            <p className="mb-4 text-neutral-400"> Projeto teste usando Tailwind para testar os limites </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              REACT
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              TAILWIND
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <div className="w-full lg:w-1/4">
            <img src={sixPack2} width={250} height={250} alt="project calculator" />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold"> SixPack </h6>
            <p className="mb-4 text-neutral-400"> Projeto da Sixpack... </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              REACT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
