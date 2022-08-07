/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const committee = () => {
    return (
        <>
            <div>
                <Header >
                </Header>
            </div>
            <div className="flex items-center justify-center  pt-10 mb-12 bg-fixed bg-center bg-cover bg-[url('./banner.jpg')]  h-screen ">
                <div className="mt-25 md:mt-0 ">
                    <div className=" grid grid-cols-3 gap-10 ">
                        
                    </div>


                    <div>
                        <h1 >
                            This is a new page.
                        </h1>
                        <h3>
                            committee of
                        </h3>


                    </div>
                    <div>
                        <Footer></Footer>
                    </div>

                </div>
            </div>


        </>
    );
};

export default committee;