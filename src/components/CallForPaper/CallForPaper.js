import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { data } from './data';
const CallForPaper = () => {
  return (
    <div className="">
      <Header />
      <div className=" mt-8 w-[80vw] md:w-[60vw] mx-auto h-fit mb-24">
        <h1 className="overflow-hidden text-4xl pt-12 h-[15vh] font-semibold mx-auto">
          Call For Papers
        </h1>
        <h2 className="text-lg">
          Original contributions from researchers describing their original,
          unpublished, research contribution which is not currently under review
          by another conference or journal and addressing state-of-the-art
          research are invited to share their work in all areas of ICMLDE 2022
          but not limited to the conference tracks.
        </h2>
        <div className="mt-4">
          <h2 className="text-lg">Conference Sub Themes and Tracks:</h2>
          <div className="flex w-[80vw] md:w-[60vw] flex-wrap justify-around">
            {data.map((item) => {
              return (
                <div className="mx-4 mt-8" key={item.id}>
                  <h3 className="bg-[#990000] w-[70vw] md:w-[30vw] px-4 py-2 text-md md:text-lg text-center text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4">
                    {item.desc.map((item) => {
                      return (
                        <div className="justify-evenly" key={item.id}>
                          <h2 className="w-[60vw] md:w-[30vw] text-md md:text-lg">
                            {item.name}
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPaper;
