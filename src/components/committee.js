/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { cdata } from './cdata';

const committee = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>

      <div className="mb-24">
        <div className="mx-auto w-[80vw] md:w-[60vw] mt-16">
          <h1 className="text-[#0284c7] text-3xl font-bold">Committees</h1>
        </div>
        <div className=" mb-24 mx-auto w-[80vw] md:w-[60vw] text-2x1 mt-12 md:text-lg bg-[#0284c7] text-white text-center font-bold ">
          <h1 className="w-[80vw] md:w-[60vw] p-4">Committee Members</h1>
          {cdata.map((item) => {
            return (
              <div className="bg-white text-black" key={item.id}>
                <div className="w-[80vw] md:w-[60vw] text-left text-semibold p-2 border-2">
                  <h1 className="m-0 text-2xl">{item.title}</h1>
                </div>
                {item.members.map((member) => {
                  return (
                    <div
                      className="flex p-2 font-normal text-left border-2"
                      key={member.name}
                    >
                      <p className="w-[40vw] md:w-[60vw]">{member.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default committee;
