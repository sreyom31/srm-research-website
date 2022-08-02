import React from 'react';
import Prof from '../prof.jpg';
import Data from '../data.json';
import Header from './Header';
import Footer from './Footer';
const Info = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center  pt-10 mb-12 bg-fixed bg-center bg-cover bg-[url('./banner.jpg')]  h-screen ">
        <div>
          <div className=" grid grid-cols-3 gap-10 ">
            <img
              src={Prof}
              width="200"
              className="col-span-full sm:col-span-1 mx-10 md:mx-10"
            ></img>

            <div className="text-center font-bold text-4xl leading-loose uppercase col-span-full sm:col-span-2 px-5 ">
              <p>Third international conference</p>
              <p>ON</p>
              <p>Internet Of Things</p>
              <p>(ICIOT-2022),5-7 April 2022 </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-navy ">
        {Data.map((post) => {
          return (
            <div key={true}>
              <div className="flex justify-center m-5 p-5">
                <div className="  grid grid-cols-9 gap-4  text-sm">
                  <div className="col-span-1"></div>
                  <div className="col-span-full  md:col-span-2 text-right">
                    <img
                      src={post.image1}
                      width="250"
                      height="200"
                      className="rounded-md"
                    />
                    <div className="text-center items-center">
                      <p className="pl-10 pt-2 text-justify text-lg font-bold ">
                        {post.title1}
                      </p>
                      <p className="pl-10 pt-2 text-blue-200 font-bold text-justify text-lg ">
                        PROFILE
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
              <div className=" bg-blue-200">
                <div className="flex justify-center m-5 mb-0 p-5 ">
                  <div className="  grid grid-cols-9 gap-4  text-sm">
                    <div className="col-span-1"></div>
                    <div className="col-span-full  md:col-span-2 text-right">
                      <img
                        src={post.image2}
                        width="250"
                        height="200"
                        className="rounded-md"
                      />
                      <div className="text-center items-center">
                        <p className="pt-2 text-justify text-lg font-bold">
                          {post.title2}
                        </p>
                        <p className="pl-10 pt-2  text-white font-bold text-justify text-lg ">
                          PROFILE
                        </p>
                      </div>
                    </div>
                    <div className=" col-span-full md:col-span-5  ">
                      <p className="text-justify">{post.content3}</p>
                      <p className="text-justify pt-3">{post.content4}</p>
                      <div className="pt-5">
                        <p className="font-bold">{post.info8}</p>
                        <p className="font-bold">{post.info9}</p>
                        <p className="font-bold">{post.info10}</p>
                        <p className="font-bold">{post.info11}</p>
                        <p className="font-bold">{post.info12}</p>
                      </div>
                    </div>
                    <div className="col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default Info;
