"use client";
import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { PiDotOutlineDuotone } from "react-icons/pi";

export const MainPage = () => {
  const pictureData = [
    {
      id: 1,
      image: "/assets/image3.svg",
    },
    {
      id: 2,
      image: "/assets/6625371.svg",
    },
    {
      id: 3,
      image: "/assets/166041.svg",
    },
    {
      id: 4,
      image: "/assets/S__60047731.svg",
    },
    {
      id: 5,
      image: "/assets/S__400835511.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBackClick = () => {
    const isFirstSlide = currentIndex === 0;
    {
      isFirstSlide ? null : setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleForwardClick = () => {
    const isLastSlide = currentIndex === 4;
    {
      isLastSlide ? null : setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const changeHandler = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="lg:flex lg:flex-row lg:h-[480px] lg:items-center xl:h-[700px]">
      <section className="flex-auto">
        <h2 className="font-poppinsbold text-4xl sm:text-5xl xl:text-[90px] text-center lg:text-start">
          Wujudkan prestasimu
        </h2>
        <p className="text-center mt-2 leading-7 font-latoregular text-md sm:text-lg  sm:py-10 lg:pr-6 lg:text-lg lg:py-5 xl:text-3xl xl:pr-[200px] lg:text-start">
          Daftar langsung pelombaan yang kamu minati. Tingkatkan prestasi dan
          kembangkan bakatmu. Cari pelombaan yang kamu minati dengan klik di
          bawah ini.
        </p>
        <div className="flex justify-center items-center mt-5 lg:justify-start">
          <button className="px-14 py-4 text-sm sm:text-lg sm:py-5 sm:px-24 lg:text-sm bg-yellow-400 text-black rounded-xl font-latobold font-bold hover:bg-yellow-600 hover:cursor-pointer xl:text-2xl xl:px-[140px] xl:mt-10 xl:ml-24">
            Mari Berprestasi
          </button>
        </div>
      </section>
      <section className="lg:w-[50px]"></section>
      <section className="flex flex-col flex-auto shrink-0 lg:px-0 justify-center xl:max-w-[900px] w-[87%] sm:w-[75%] md:w-[80%] mx-auto mt-10 py-4 px-4 lg:py-0 lg:mt-0 lg:items-center">
        <h3 className="font-poppinslight lg:font-poppinssb text-md text-center sm:text-xl lg:text-2xl xl:text-3xl">
          New This Week
        </h3>
        <div className="flex flex-row justify-center items-center">
          <button
            onClick={handleBackClick}
            className="bg-yellow-400 mr-2 w-10 h-10 xl:w-14 xl:h-14 rounded-full py-2 hover:cursor-pointer hover:bg-yellow-500 shadow-md shadow-black flex items-center justify-center"
          >
            <MdArrowBack className="fill-black w-8 h-8 sm:h-10 sm:w-10 xl:w-16 xl:h-16" />
          </button>
          <img
            src={pictureData[currentIndex].image}
            alt="poster"
            className="mt-2 w-full lg:w-[80%] xl:w-[500px] h-full rounded-3xl lg:px-3 xl:px-5 xl:object-fit xl:object-center"
          />
          <button
            onClick={handleForwardClick}
            className="bg-yellow-400 ml-2 rounded-full w-10 h-10 xl:w-14 xl:h-14 py-2 hover:cursor-pointer hover:bg-yellow-500 shadow-md shadow-black flex items-center justify-center"
          >
            <MdArrowForward className="fill-black w-8 h-8 sm:h-10 sm:w-10 xl:w-16 xl:h-16 " />
          </button>
        </div>
        <div className="flex flex-row justify-center">
          {pictureData.map((picture, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => changeHandler(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {slideIndex !== currentIndex ? (
                <PiDotOutlineDuotone className="fill-white w-5 h-5 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:h-20 xl:w-20" />
              ) : (
                <PiDotOutlineDuotone className="fill-yellow-400 w-5 h-5 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:h-20 xl:w-20" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
