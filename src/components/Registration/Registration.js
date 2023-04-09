import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { data } from './data';
const Registration = () => {
  return (
    <div>
      <Header />
      <div className="mt-8 w-screen h-fit">
        <h1 className="text-4xl pt-12 mx-auto font-bold text-center">
          Registration
        </h1>
        {/* <div className="flex ">
          <button className="bg-[#0284c7] text-white text-md w-fit mx-auto px-4 py-2 rounded-md">
            <a href="./form.doc" download>
              Download Registration Form
            </a>
          </button>
        </div> */}
        <div className="mb-24">
          <div className="mx-auto w-[80vw] md:w-[60vw] mt-16">
            <h1 className="text-[#0284c7] text-2xl font-bold">
              Registration Fees
            </h1>
          </div>
          <div className="flex flex-wrap justify-around mx-auto w-[80vw] md:w-[60vw] mt-12 text-sm md:text-lg bg-[#0284c7] text-white text-center font-bold ">
            <h1 className="w-1/3 md:w-1/3 border-2 border-sky-500 p-2">
              Category
            </h1>
            <h1 className="w-1/3 md:w-1/3 border-2 border-sky-500 p-2">
              Early Bird Registration - closes by 12/3/2023
            </h1>
            <h1 className="w-1/3 md:w-1/3 border-2 border-sky-500 p-2">
              Registration Amount
            </h1>
            {data.map((item) => {
              return (
                <div className="h-auto bg-white text-black" key={item.id}>
                  <div className="flex justify-around w-[80vw] md:w-[60vw] text-semibold p-2 border-2">
                    <h2 className="w-1/2">{item.title}</h2>
                    <h2 className="w-1/2">{item.early}</h2>
                    <h2 className="w-1/2">{item.price}</h2>
                  </div>
                  {/* {item.prices.map((price) => {
                    return (
                      <div
                        className="flex p-2 font-normal text-left border-2"
                        key={price.name}
                      >
                        <p className="w-[40vw] md:w-[30vw]">{price.name}</p>
                        <p className="w-[40vw] md:w-[30vw]">{price.price}</p>
                      </div>
                    );
                  })} */}
                </div>
              );
            })}
          </div>
          <div className="text-left mx-auto w-[80vw] md:w-[60vw]">
            <p>
              <span className="font-bold">*</span>{' '}
              <span className="text-red-600">
                {' '}
                For Non -SRM author Extra Rs.3000/- is applicable for APC,
                depending upon the quality of the paper{' '}
              </span>
            </p>
          </div>
        </div>
        {/* <div className="mx-auto w-[80vw] md:w-[60vw] mb-12">
          <h1 className="text-[#0284c7] text-2xl font-bold">
            Payment of Registration
          </h1>
          <p className="text-sm md:text-lg mt-8">
            1. Delegates/authors paying by wire transfer should use the
            following account information and submit their bank transaction slip
            and other pertinent information to iciot.2023@srmist.edu.in .
          </p>
        </div> */}
        <div className="mx-auto w-[80vw] md:w-[60vw] mb-12">
          <h1 className="text-[#0284c7] text-2xl font-bold">
            Registration Details
          </h1>
          <p className="text-sm md:text-lg mt-4">
            Authors whose paper has been selected for presentation will be
            communicated with the details for making online payment. They need
            to register for the conference by providing appropriate details in
            the form that would be communicated through mail.
          </p>
          <p className="text-sm md:text-lg mt-4">
            Anyone who wishes to register for attending the conference as a
            delegate could request for the account details through mail. The
            mail ID to which the request has to be sent is
            iciot.2023@srmist.edu.in
          </p>
          <p className="text-sm md:text-lg mt-4">
            For any registration-related queries, please contact: <br />
            <span>Dr. P. Madhavan - 9865856533</span> <br />
            <span>Dr. J. Ramaprabha - 9790765573</span>
            <br />
            <span>Mrs G. Malarselvi - 9884707533</span>
          </p>
        </div>
        {/* <div className="w-[80vw] mx-auto md:w-[60vw] mb-24">
          {transfer.map((item) => {
            return (
              <div className="mt-12" key={item.id}>
                <h1 className="text-[#0284c7] text-xl md:text-2xl font-bold">
                  {item.title}
                </h1>
                {item.details.map((detail) => {
                  return (
                    <div
                      className="flex p-2 font-normal w-[80vw] md:w-[60vw] text-left border-2"
                      key={detail.id}
                    >
                      <p className="w-[40vw] md:w-[30vw]">{detail.name}</p>
                      <p className="w-[40vw] md:w-[30vw]">{detail.data}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
