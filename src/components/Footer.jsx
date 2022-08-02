/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-sky-600 w-full mx-auto  bottom-0 text-gray-300'>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 pb-3 text-white text-medium pb-8">
        <span>© Copyright SRM ICIot 2022. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className='flex justify-center md:w-[75%] text-white'>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-blue-400 mx-1.5  hover:text-blue-400 hover:bg-white'>
                <FaFacebookSquare size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-blue-400 mx-1.5 hover:text-blue-400 hover:bg-white'>
                <FaInstagram size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-blue-400 mx-1.5 hover:text-blue-400 hover:bg-white'>
                <FaTwitterSquare size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-blue-400 mx-1.5 hover:text-blue-400 hover:bg-white'>
                <FaGithubSquare size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-blue-400 mx-1.5 hover:text-blue-400 hover:bg-white'>
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;