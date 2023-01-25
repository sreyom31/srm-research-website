import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { data } from './data';

const CallForPaper = () => {
  // const [visible1, setVisible1] = useState(false);
  return (
    <div>
      <Header />
      <div className="bg-[#9FEAF5]">
        <div className=" mt-8 w-[80vw] md:w-[60vw] mx-auto h-fit mb-24">
          <h1 className="overflow-hidden text-4xl pt-12 h-[15vh] font-semibold mx-auto">
            Call For Papers
          </h1>
          <h2 className="text-lg text-justify">
            Original contributions from researchers describing their original,
            unpublished, research contribution which is not currently under
            review by another conference or journal and addressing
            state-of-the-art research are invited to share their work in all
            areas of ICIOT 2023 but not limited to the conference tracks.
          </h2>
          <div className="mt-4 mb-5">
            {/* <h2 className="text-2xl text-center font-bold">
            Conference Sub Themes and Tracks:
          </h2> */}
            <div className="flex w-[60vw] md:w-[60vw] flex-wrap justify-around">
              {data.map((item) => {
                return (
                  <div
                    className="mx-4 mt-8  w-[50vw]  md:text-lg text-center text-white collapse collapse-arrow border border-base-300  rounded-box"
                    key={item.id}
                  >
                    <input type="checkbox" />
                    <div
                      className="collapse-title text-xl font-medium px-4  bg-[#0284c7]"
                      // className="  "
                    >
                      {item.title}
                    </div>
                    <div className="collapse-content bg-white text-black">
                      <div className="mt-4">
                        {item.desc.map((item) => {
                          return (
                            <div
                              className="justify-evenly text-left"
                              key={item.id}
                            >
                              <ul className="w-[60vw] list-disc  md:w-[30vw] pb-4 px-3 text-md md:text-lg">
                                <li>{item.name}</li>
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* <div style={{ minHeight:  "0" }}>
                    <CCollapse
                      id="collapseWidthExample1"
                      visible={visible1}
                    >
                      <CCard  style={{width:"100%" }}>
                        <CCardBody style={{height:"100%" }}>
                         
                        </CCardBody>
                      </CCard>
                    </CCollapse>
                  </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CallForPaper;
