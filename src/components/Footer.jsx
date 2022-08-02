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
    <div className='bg-black w-full mx-auto  bottom-0 text-gray-300'>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 pb-4 text-gray-400 text-medium pb-8">
        <span>© Copyright SRM ICIot 2022. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className='flex justify-between md:w-[75%] text-teal-500'>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500'>
                <FaFacebookSquare size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500'>
                <FaInstagram size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500'>
                <FaTwitterSquare size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500'>
                <FaGithubSquare size={30} />
            </div>
            <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500'>
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;