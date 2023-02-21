import React from 'react';
// import Prof from '../Prof.png';
import './Info.css';
import Data from '../data.json';
import Header from './Header';
import Footer from './Footer';
const Info = () => {
  return (
    <>
      <Header />
      <div className="info-cont bg-blue-200">
        <h1 className="speakerHead">Speakers</h1>
        <div className="speakersCont">
          {Data.map((post) => {
            return (
              <div key={post.id}>
                {/* <div className=" bg-blue-200">
                <div className="flex justify-center m-5 mb-0 p-5 ">
                  <div className="  grid grid-cols-9 gap-4  text-sm">
                    <div className="col-span-1"></div>
                    <div className="col-span-full  md:col-span-2 text-right">
                      <img
                        src={post.image1}
                        width="200"
                        className="rounded-md"
                      />
                      <div className="text-center items-center">
                        <p className="pt-2 text-justify text-lg font-bold">
                          {post.title1}
                        </p>
                      </div>
                    </div>
                    <div className=" col-span-full md:col-span-5  ">
                      <p className="text-justify">{post.content1}</p>
                      <p className="text-justify pt-3">{post.content2}</p>
                      <div className="pt-5">
                        <p className="font-bold">{post.info1}</p>
                        <p className="font-bold">{post.info2}</p>
                        <p className="font-bold">{post.info3}</p>
                        <p className="font-bold">{post.info4}</p>
                        <p className="font-bold">{post.info5}</p>
                      </div>
                    </div>
                    <div className="col-span-1"></div>
                  </div>
                </div>
              </div> */}

                <div className="speaker">
                  <img src={post.image1} alt="" />
                  <h1 className="speakerName">{post.title1}</h1>
                  <p className="speakerInfo">{post.info1}</p>
                  <p className="speakerInfo">{post.info2}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Info;
