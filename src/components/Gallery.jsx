import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from './Header';
import Footer from './Footer';

const images = [
  '/images/DSCN2336.jpg',
  '/images/DSCN2509.jpg',
  '/images/DSCN2908.jpg',
  '/images/DSCN2998.jpg',
  '/images/DSCN3239.jpg',
  '/images/2019iciotp1.jpg',
  '/images/2019iciotp2.jpg',
  '/images/2019iciotp3.jpg',
  '/images/2019iciotp4.jpg',
  '/images/2019iciotp5.jpg',
  '/images/2019iciotp6.jpg',
  '/images/2019iciotp7.jpg',
  '/images/2019iciotp8.jpg',
  '/images/DSCN1375.jpg',
  '/images/DSCN1382.jpg',
  '/images/DSCN1383.jpg',
  '/images/DSCN1803.jpg',
  '/images/DSCN1942.jpg',
  '/images/DSCN2099.jpg',
  '/images/iciot2020p1.jpg',
  '/images/iciot2020p2.jpg',
  '/images/iciot2020p3.jpg',
  '/images/iciot2020p4.jpg',
  '/images/iciot2020p5.jpg',
  '/images/iciot2020p6.jpg',
  '/images/iciot2020p7.jpg',
  '/images/iciot2020p8.jpg',
  '/images/iciot2020p9.jpg',
  '/images/iciot2020p10.jpg',
  '/images/iciot2020p11.jpg',
  '/images/iciot2020p12.jpg',
  '/images/iciot2020p13.jpg',
  '/images/iciot2020p14.jpg',
  '/images/iciot2020p15.jpg',
  '/images/iciot2020p16.jpg',
  '/images/iciot2020p17.jpg',
  '/images/iciot2020p18.jpg',
  '/images/iciot2020p19.jpg',
  '/images/iciot2020p20.jpg',
  '/images/iciot2020p21.jpg',
  '/images/iciot2020p22.jpg',
  '/images/iciot2020p23.jpg',
  '/images/iciot2020p24.jpg',
  '/images/iciot2020p25.jpg',
  '/images/iciot2020p26.jpg',
  '/images/iciot2020p27.jpg',
  '/images/iciot2020p28.jpg',
];

let count = 0;
let slideInterval;

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const imgsLength = images.length;
    count = (currentIndex + imgsLength - 1) % imgsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  return (
    <div>
      <Header />
      <div ref={slideRef} className="w-full select-none relative">
        <div className="aspect-w-16 aspect-h-9"></div>
        <img src={images[currentIndex]} style={{ width: '100%' }} />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
