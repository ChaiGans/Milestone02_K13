"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

interface Lomba {
  name: string
  description: string
  registrationDate: string
  price: number
  contact: string
  poster: string
  userId: string
}

const Popular = () => {
  const [lomba, setLomba] = useState([])

  useEffect(() => {
    fetch("/api/competitions")
      .then((response) => response.json())
      .then((data) => setLomba(data))
  }, [])

  return (
    <div>
      <div className="Sorting-Filtering flex justify-start gap-[40px] mb-10">
        <div className="Sorting font-medium">
          Sorted By <br />{" "}
          <span className="font-bold text-[26px]">Paling Populer</span>
        </div>
        <div className="Filtering font-medium">
          Filtered By <br /> <span className="font-bold text-[26px]">None</span>
        </div>
      </div>
      <div className="Card-List flex justify-start gap-[40px] flex-wrap md:gap-[20px]">
        {lomba.map((competition: Lomba) => (
          <div
            key={competition.name}
            className="card-display w-[250px] h-[420px] bg-transparent rounded-[20px] relative mb-[40px] mx-[auto] sm:mx-[0] ml:mx-[0]"
          >
            <div className="date text-[18px] bg-yellow-500 absolute p-[8px] w-[60px] h-[80px] left-[180px] z-50 overflow-wrap white-space: pre-line;">
              <p className="font-bold">{competition.registrationDate}</p>
            </div>
            <div
              className="card-image rounded-tl-[20px] rounded-tr-[20px] h-[280px] bg-cover bg-center overflow-hidden relative mt-[20px]"
              style={{ backgroundImage: `url(${competition.poster})` }}
            >
              <div className=" price flex justify-center rounded-tl-[10px] bg-yellow-500 relative w-[150px] h-[30px] top-[90%] left-[47%] items-center text-[16px]">
                Rp.{competition.price}
              </div>
            </div>
            <div className="card-description text-black text-center rounded-bl-[20px] rounded-br-[20px] bg-white py-[10px] overflow-hidden h-[140px] relative">
              <h1 className="text-[17px] h-[50px] font-bold item-center justify-center">
                {competition.name}
              </h1>
              <p className="text-[16px] font-medium m-auto">
                Contact: {competition.contact}
              </p>
              <Link
                href="#"
                className="hover:bg-[#ccff33] active:bg-[#70e000] inline-block bg-[#9ef01a] px-[30px] py-[5px] mt-2 rounded-[10px] text-white absolute bottom-[10%] right-[75px]"
              >
                Daftar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular
