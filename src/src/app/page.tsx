"use client"
import React, { useState, useEffect } from "react"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { PiDotOutlineDuotone } from "react-icons/pi"
import Image from "next/image"
import Link from "next/link"
interface Lomba {
  id: string
  name: string
  description: string
  registrationDate: string
  price: number
  contact: string
  poster: string
  userId: string
}

const MainPage = () => {
  const [lomba, setLomba] = useState<Lomba[]>([])

  useEffect(() => {
    fetch("/api/competitions")
      .then((response) => response.json())
      .then((data) => setLomba(data.slice(0, 5)))
  }, [])
  // console.log(lomba)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleBackClick = () => {
    const isFirstSlide = currentIndex === 0
    {
      isFirstSlide ? null : setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  const handleForwardClick = () => {
    const isLastSlide = currentIndex === 4
    {
      isLastSlide ? null : setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const changeHandler = (slideIndex: any) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="lg:flex lg:flex-row h-auto lg:items-center xl:min-w-screen overflow-hidden">
      <section className="flex-auto xl:w-[40%]">
        <h2 className="font-poppinsbold text-4xl sm:text-5xl xl:text-[90px] text-center lg:text-start">
          Wujudkan prestasimu
        </h2>
        <p className="text-center mt-2 leading-7 font-latoregular text-md sm:text-lg  sm:py-10 lg:pr-6 lg:text-lg lg:py-5 xl:text-xl xl:pr-[0px] lg:text-start">
          Daftar langsung pelombaan yang kamu minati. Tingkatkan prestasi dan
          kembangkan bakatmu. Cari pelombaan yang kamu minati dengan klik di
          bawah ini.
        </p>
        <div className="flex justify-center items-center mt-5 lg:justify-start">
          <Link
            href="/competitions"
            className="px-14 lg:px-10 py-4 text-sm sm:text-lg sm:py-5 sm:px-24 lg:text-sm bg-primary text-primary-foreground rounded-xl font-latobold font-bold hover:bg-yellow-600 hover:cursor-pointer xl:text-2xl xl:px-[100px] xl:mt-10 xl:ml-20"
          >
            Mari Berprestasi
          </Link>
        </div>
      </section>
      <section className="flex flex-col flex-auto shrink-0 lg:px-0 justify-center xl:max-w-[900px] mt-10 py-4 px-4 lg:py-0 lg:mt-0 lg:items-center">
        <h3 className="font-poppinslight lg:font-poppinssb text-md text-center sm:text-xl lg:text-2xl xl:text-3xl">
          New This Week
        </h3>
        <div className="flex flex-row justify-center items-center">
          <button
            onClick={handleBackClick}
            className="bg-primary mr-2 w-7 h-7 sm:w-10 sm:h-10 xl:w-14 xl:h-14 rounded-full py-2 hover:cursor-pointer hover:bg-yellow-500 shadow-md shadow-primary-foreground flex items-center justify-center"
          >
            <MdArrowBack className="fill-primary-foreground w-8 h-8 sm:h-10 sm:w-10 xl:w-16 xl:h-16" />
          </button>
          <Link href={`/competitions/${lomba[currentIndex]?.id}`}>
            <Image
              src={lomba[currentIndex]?.poster}
              width={400}
              height={0}
              alt="poster"
              className="object-cover max-h-[500px]"
            />
          </Link>
          <button
            onClick={handleForwardClick}
            className="bg-primary ml-2 rounded-full w-7 h-7 sm:w-10 sm:h-10 xl:w-14 xl:h-14 py-2 hover:cursor-pointer hover:bg-yellow-500 shadow-md shadow-primary-foreground flex items-center justify-center"
          >
            <MdArrowForward className="fill-primary-foreground w-8 h-8 sm:h-10 sm:w-10 xl:w-16 xl:h-16 " />
          </button>
        </div>
        <div className="flex flex-row justify-center">
          {lomba.map((data: Lomba, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => changeHandler(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {slideIndex !== currentIndex ? (
                <PiDotOutlineDuotone className="fill-foreground w-5 h-5 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:h-20 xl:w-20" />
              ) : (
                <PiDotOutlineDuotone className="fill-yellow-400 w-5 h-5 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:h-20 xl:w-20" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MainPage
