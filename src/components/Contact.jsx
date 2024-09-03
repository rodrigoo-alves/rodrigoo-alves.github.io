import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl"> Contact </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4"> Email - alvesrodrigo762@gmail.com </p>
        <div className="flex justify-center items-center">
          <p className="my-4 w-40 flex justify-center items-center">
            GitHub -
            <a href="https://github.com/rodrigoo-alves" className="px-1 text-3xl">
              <FaGithubSquare />
              {' '}
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="my-4 w-40 flex justify-center items-center">
            Linkedin -
            <a href="https://www.linkedin.com/in/rdalvs/" className="px-1 text-3xl">
              <FaLinkedin />
              {' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
