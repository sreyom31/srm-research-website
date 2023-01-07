import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { data } from './data';
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
const CallForPaper = () => {
  const [visible1, setVisible1] = useState(false);
  return (
    <div className="">
      <Header />
      <div className=" mt-8 w-[80vw] md:w-[60vw] mx-auto h-fit mb-24">
        <h1 className="overflow-hidden text-4xl pt-12 h-[15vh] font-semibold mx-auto">
          Call For Papers
        </h1>
        <h2 className="text-lg text-justify">
          Original contributions from researchers describing their original,
          unpublished, research contribution which is not currently under review
          by another conference or journal and addressing state-of-the-art
          research are invited to share their work in all areas of ICIOT 2023
          but not limited to the conference tracks.
        </h2>
        <div className="mt-4 mb-5">
          {/* <h2 className="text-2xl text-center font-bold">
            Conference Sub Themes and Tracks:
          </h2> */}
          <div className="flex w-[60vw] md:w-[60vw] flex-wrap justify-around">
            {data.map((item) => {
              return (
                <div className="mx-4 mt-8" key={item.id}>
                  <CButton
                    className="bg-[#122a58] w-[50vw] px-4 py-2 md:text-lg text-center text-white "
                    onClick={() => setVisible1(!visible1)}
                    aria-expanded={visible1}
                    aria-controls="collapseWidthExample1"
                  >
                    {item.title}
                    <span>&#8595;</span>
                  </CButton>
                  <div style={{ minHeight: '0' }}>
                    <CCollapse id="collapseWidthExample1" visible={visible1}>
                      <CCard style={{ width: '100%', height: '100%' }}>
                        <CCardBody style={{ height: '100%' }}>
                          <div className="mt-4">
                            {item.desc.map((item) => {
                              return (
                                <div className="justify-evenly" key={item.id}>
                                  <ul className="w-[60vw] list-disc  md:w-[30vw] pb-4 px-3 text-md md:text-lg">
                                    <li className="list-disc">{item.name}</li>
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCollapse>
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
