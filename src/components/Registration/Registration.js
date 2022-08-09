import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { data, transfer } from './data';
const Registration = () => {
  return (
    <div>
      <Header />
      <div className="mt-32   w-screen h-fit">
        <h1 className="text-4xl pt-12 mx-auto h-[15vh] font-bold text-center">
          Registration
        </h1>
        <div className="flex ">
          <button className="bg-[#0284c7] text-white text-md w-fit mx-auto px-4 py-2 rounded-md">
            <a href="./form.doc" download>
              Download Registration Form
            </a>
          </button>
        </div>
        <div className="mb-24">
          <div className="mx-auto w-[80vw] md:w-[60vw] mt-24">
            <h1 className="text-[#0284c7] text-2xl font-bold">
              Registration Fees
            </h1>
          </div>
          <div className="flex flex-wrap justify-around mx-auto w-[80vw] md:w-[60vw] mt-12 text-sm md:text-lg bg-[#0284c7] text-white text-center font-bold ">
            <h1 className="w-[40vw] md:w-[30vw] border-2 border-sky-500 p-2">
              Category
            </h1>
            <h1 className="w-[40vw] md:w-[30vw] border-2 border-sky-500 p-2">
              Registration price
            </h1>
            {data.map((item) => {
              return (
                <div className="bg-white text-black" key={item.id}>
                  <div className="w-[80vw] md:w-[60vw] text-left text-semibold p-2 border-2">
                    <h1>{item.title}</h1>
                  </div>
                  {item.prices.map((price) => {
                    return (
                      <div
                        className="flex p-2 font-normal text-left border-2"
                        key={price.name}
                      >
                        <p className="w-[40vw] md:w-[30vw]">{price.name}</p>
                        <p className="w-[40vw] md:w-[30vw]">{price.price}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto w-[80vw] md:w-[60vw] mb-12">
          <h1 className="text-[#0284c7] text-2xl font-bold">
            Payment of Registration
          </h1>
          <p className="text-sm md:text-lg">
            1. Details on how to pay the registration fee through wire transfer
            are provided to participants.
          </p>
          <p className="text-sm md:text-lg mt-8">
            2. Delegates/authors paying by wire transfer should use the
            following account information and submit their bank transaction slip
            and other pertinent information to icmlde2022@gmail.com .
          </p>
        </div>
        <div className="w-[80vw] mx-auto md:w-[60vw] mb-24">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
