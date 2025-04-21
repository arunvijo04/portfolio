import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[40%] left-0 fixed z-50">
      <ul>
        <li className="group flex items-center w-40 h-12 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1e293b] hover:bg-blue-600 rounded-r-md">
          <a
            href="https://github.com/arunvijo04"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white px-4"
          >
            GitHub <FaGithub size={24} />
          </a>
        </li>
        <li className="group flex items-center w-40 h-12 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1e293b] hover:bg-blue-600 rounded-r-md mt-2">
          <a
            href="https://linkedin.com/in/arunvjo04"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white px-4"
          >
            LinkedIn <FaLinkedin size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
