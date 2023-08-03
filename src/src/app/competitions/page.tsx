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
  const [lomba, setLomba] = useState([
    {
      id: "ff042c92-fa49-423f-b77f-746bb111a61d",
      name: "Lomba Poster Ilmiah Nasional",
      description:
        "Lomba Poster Ilmiah Nasional adalah kompetisi yang diadakan di tingkat nasional di suatu negara, di mana peserta diminta untuk membuat poster ilmiah yang mencerminkan penelitian atau kajian dalam bidang ilmu tertentu. Lomba ini bertujuan untuk mendorong kreativitas dan kemampuan peserta dalam menyajikan hasil penelitian atau ide-ide ilmiah secara visual dan menarik.",
      registrationDate: "24 Apr",
      price: 0,
      contact: "085339061487",
      poster:
        "https://drive.google.com/uc?export=view&id=1-hJqoS2oay00RYZz987Hd6p11Lwm0Dkc",
      userId: "9f4ab025-bf8f-4f31-84dd-5053cacc29cf",
    },
    {
      id: "90c501bb-9b52-4a5c-8051-82ea545a2807",
      name: "Lomba Menulis Deskripsi Paten",
      description:
        "Lomba Menulis Deskripsi Paten adalah sebuah kompetisi di mana peserta ditantang untuk menyusun deskripsi lengkap dan terperinci mengenai suatu penemuan atau inovasi tertentu yang memiliki nilai komersial dan kebaruan. Lomba ini bertujuan untuk mendorong kreativitas dan kemampuan peserta dalam merumuskan deskripsi paten yang jelas, akurat, dan sesuai dengan aturan dan persyaratan yang berlaku dalam sistem paten.",
      registrationDate: "30 July",
      price: 50000,
      contact: "085172421910",
      poster:
        "https://drive.google.com/uc?export=view&id=1-Yq5XyXrMIc79ky4VfzE6hl56Heyjvzh",
      userId: "9f4ab025-bf8f-4f31-84dd-5053cacc29cf",
    },
    {
      id: "ec9a66a0-8410-48d8-bd3d-b7a3d8d93db5",
      name: "Lomba Jurnalistik",
      description:
        "Lomba Jurnalistik adalah sebuah kompetisi yang mengundang peserta untuk menguji kemampuan mereka dalam menulis dan menyajikan berita secara objektif, informatif, dan menarik. Lomba ini bertujuan untuk mendorong kreativitas dan profesionalisme dalam bidang jurnalisme, serta mempromosikan keterampilan penulisan yang baik dan pemahaman tentang etika jurnalistik.",
      registrationDate: "1 Des",
      price: 35000,
      contact: "08157618448",
      poster:
        "https://drive.google.com/uc?export=view&id=14VE-eql2_JKm4C6pAUDPJoY3vgZ4icLR",
      userId: "9f4ab025-bf8f-4f31-84dd-5053cacc29cf",
    },
    {
      id: "cc594a6d-f9e0-437c-bdb7-375daaa3889b",
      name: "Lomba Cipta Lagu Anak",
      description:
        "Lomba Cipta Lagu Anak adalah sebuah kompetisi kreatif di mana peserta diajak untuk menciptakan lagu yang ditujukan khusus untuk anak-anak. Lomba ini bertujuan untuk mendorong kreativitas peserta dalam menyusun lirik dan melodi lagu yang menarik, edukatif, dan menghibur bagi anak-anak.",
      registrationDate: "15 Sept",
      price: 0,
      contact: "081933803658",
      poster:
        "https://drive.google.com/uc?export=view&id=1QUyuxz6CvEpXDi8pTZaSt5peC6U8uFcC",
      userId: "9f4ab025-bf8f-4f31-84dd-5053cacc29cf",
    },
    {
      id: "5d31ecd8-343d-44bb-bd90-e44a065ca2d3",
      name: "Lomba Menyanyi Anak",
      description:
        "Lomba Menyanyi Anak adalah sebuah kompetisi yang mengajak anak-anak untuk menampilkan bakat menyanyi mereka di depan publik atau dewan juri. Lomba ini bertujuan untuk memberikan kesempatan kepada anak-anak untuk mengekspresikan diri melalui seni musik, mengasah kemampuan vokal, dan mengembangkan rasa percaya diri di atas panggung.",
      registrationDate: "28 Okt",
      price: 0,
      contact: "08111888932",
      poster:
        "https://drive.google.com/uc?export=view&id=1nyluG7yDJ2TIfolOBTT5Wu6BLmz7w5sf",
      userId: "9f4ab025-bf8f-4f31-84dd-5053cacc29cf",
    },
  ])

  //   useEffect(() => {
  //     fetch("/api/competitions")
  //       .then((response) => response.json())
  //       .then((data) => setLomba(data))
  //   }, [])

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
      <div className="Card-List flex justify-start gap-[40px] flex flex-wrap md:gap-[20px]">
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
