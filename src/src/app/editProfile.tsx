"use client"
import React, { useState } from "react"

export const Editprofile = () => {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [instansi, setInstansi] = useState("")
  const [lomba1, setLomba1] = useState("")
  const [lomba2, setLomba2] = useState("")
  const [lomba3, setLomba3] = useState("")

  const handleNamaChange = (e: any) => {
    setNama(e.target.value)
  }
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }
  const handleInstansiChange = (e: any) => {
    setInstansi(e.target.value)
  }
  const handleLomba1Change = (e: any) => {
    setLomba1(e.target.value)
  }
  const handleLomba2Change = (e: any) => {
    setLomba2(e.target.value)
  }
  const handleLomba3Change = (e: any) => {
    setLomba3(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Nama:", nama)
    console.log("Email:", email)
    console.log("Asal Instansi:", instansi)
    console.log("Lomba 1:", lomba1)
    console.log("Lomba 2:", lomba2)
    console.log("Lomba 3:", lomba3)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl rounded-lg bg-white min-h-fit text-black ">
      <div className="container mx auto p-0 my-5 text-center">
        <h1 className="text-left font-poppinsbold text-4xl sm:text-5xl xl:text-[50px] ml-6 ">
          Detail Profil
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p>Foto Profil</p>
        <img
          src="/assets/6625371.svg"
          alt="dawdadkjba"
          width="150"
          height="150"
          className="rounded-full my-5"
        />
        <button className="bg-amber-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg mx-auto px-10 py-4 font-poppinsbold  mb-10">
          Unggah Foto
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid  grid-rows-3  grid-flow-row md:grid-flow-col gap-4 px-10">
          <div>
            <label className=" md:block">Nama</label>
            <input
              type="text"
              className="border-2 w-full sm:w-full p-3 mt-2 rounded-lg"
              placeholder=""
              value={nama}
              onChange={handleNamaChange}
            />
          </div>
          <div>
            <label className=" md:block">Alamat Email</label>
            <input
              type="email"
              className="border-2 w-full sm:w-full p-3 mt-2 rounded-lg "
              placeholder=""
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label className=" md:block">Asal Instansi</label>
            <input
              type="text"
              className="border-2 w-full sm:w-full p-3 mt-2 rounded-lg"
              placeholder=""
              value={instansi}
              onChange={handleInstansiChange}
            />
          </div>

          <div>
            <label className=" md:block">Lomba 1</label>
            <input
              type="text"
              className="border-2 w-full sm:w-full p-3 mt-2 rounded-lg"
              placeholder=""
              value={lomba1}
              onChange={handleLomba1Change}
            />
          </div>
          <div>
            <label className=" md:block">Lomba 2</label>
            <input
              type="text"
              className="border-2 w-full sm:w-full p-3 mt-2 rounded-lg"
              placeholder=""
              value={lomba2}
              onChange={handleLomba2Change}
            />
          </div>
          <div>
            <label className=" md:block">Lomba 3</label>
            <input
              type="text"
              className="border-2 w-full sm:w-full p-3 mt-2 rounded-lg"
              placeholder=""
              value={lomba3}
              onChange={handleLomba3Change}
            />
          </div>
        </div>

        <div className="flex flex-col mt-20 mb-10">
          <button
            type="submit"
            className="bg-amber-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg mx-auto px-20 py-4 font-poppinsbold  "
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  )
}
