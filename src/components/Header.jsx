/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from '../components/Nav';
import srmlogo from '../../src/images/srmlogo.png';
import ctech from '../images/CtechLogo.png';

const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center">
        <img src={srmlogo} className="w-[40%]"></img>
        <img src={ctech} className="w-[50%]"></img>
      </div>
      <br />
      <div className="container-fluid text-center">
        <div className="w-17/20 mx-auto font-bold">
          <p className="h-18 text-2xl text-red-900">
            International Conference on Internet of Things
          </p>
          <h1 className="h-15 pt-5 pb-5 text-3xl text-red-900">ICIoT 2023</h1>
          <div className="font-serif text-2xl text-black">
            26 - 28 April 2023
          </div>
          <h5 className="h-10 text-center text-red-900 text-xl font-medium">
            SRMIST, KTR, Chennai, India
          </h5>
          {/* <h4 className="text-center title text-blue-500 text-xl">
            <p>
              <a href="/">
                All accepted papers will be published in Procedia Computer
                Science Journal, Elsevier
              </a>
            </p>
          </h4> */}
        </div>
      </div>
      <br />
          <div className="bg-[#122a58]">
              <marquee className="text-white bg-[#122a58]">
          <a href="/">
            {' '}
            All accepted papers will be published in Reputed Journals.
          </a>
          <span className="ml-20">
            Last Date for Paper Submission: 15th February 2023
          </span>
        </marquee>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
