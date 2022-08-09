import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from './Header';
import Footer from './Footer';

const images = [
  'https://www.srmist.edu.in/icramc-2022/sites/icramc-2022/files/icramc-21-banner-3.jpg',
  'https://www.srmist.edu.in/icramc-2022/sites/icramc-2022/files/icramc-21-banner-1_0_0.jpg',
  'https://www.srmist.edu.in/icramc-2022/sites/icramc-2022/files/icramc-21-banner-4_0.jpg',
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
