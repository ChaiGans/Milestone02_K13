"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { UploadDropzone } from "@/utils/uploadthing"
import "@uploadthing/react/styles.css"

function Upload() {
  const router = useRouter()
  const { data: session } = useSession()
  const [dataLomba, setDataLomba] = useState({
    name: "",
    description: "",
    registrationDate: "",
    price: 0,
    contact: "",
    poster: "",
  })

  const addCompetition = async (e: any) => {
    e.preventDefault()
    await fetch("/api/competitions", {
      method: "POST",
      body: JSON.stringify({
        name: dataLomba.name,
        description: dataLomba.description,
        registrationDate: dataLomba.registrationDate,
        price: dataLomba.price,
        contact: dataLomba.contact,
        poster: dataLomba.poster,
        userId: session?.user.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    router.push("/")
  }

  return (
    <div className="bg-foreground mx-auto max-w-xl p-8 text-primary-foreground rounded-xl">
      <h1 className="text-center mb-8">Upload Perlombaan</h1>
      <form
        action="/api/competitions"
        method="post"
        onSubmit={addCompetition}
        className="flex flex-col gap-6 md:mx-10"
      >
        <div className="flex flex-col">
          <label htmlFor="Nama Lomba">Nama Lomba</label>
          <input
            required
            placeholder="Nama Lomba"
            type="text"
            className="border-primary-foreground border-2 h-10"
            onChange={(e) =>
              setDataLomba((prevData) => ({
                ...prevData,
                ...{ name: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Deskripsi Lomba">Deskripsi Lomba</label>
          <input
            required
            placeholder="Deskripsi Lomba"
            type="text"
            className="border-primary-foreground border-2 h-10"
            onChange={(e) =>
              setDataLomba((prevData) => ({
                ...prevData,
                ...{ description: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Deadline Pendaftaran">Deadline Pendaftaran</label>
          <input
            required
            placeholder="05 November 2023"
            type="text"
            className="border-primary-foreground border-2 h-10"
            onChange={(e) =>
              setDataLomba((prevData) => ({
                ...prevData,
                ...{ registrationDate: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Biaya Pendaftaran">Biaya Pendaftaran</label>
          <input
            required
            placeholder="50000"
            type="text"
            className="border-primary-foreground border-2 h-10"
            onChange={(e) =>
              setDataLomba((prevData) => ({
                ...prevData,
                ...{ price: +e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Kontak Penyelenggara">Kontak Penyelenggara</label>
          <input
            required
            placeholder="6281212345678"
            type="text"
            className="border-primary-foreground border-2 h-10"
            onChange={(e) =>
              setDataLomba((prevData) => ({
                ...prevData,
                ...{ contact: e.target.value },
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Link Poster">Poster</label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              if (res) {
                setDataLomba((prevData) => ({
                  ...prevData,
                  ...{ poster: res[0].fileUrl },
                }))
              }
              // console.log("Files: ", res)
              // alert("Upload Completed")
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`)
            }}
          />
          {dataLomba.poster === "" ? "" : <p>Uploaded</p>}
        </div>
        <button
          type="submit"
          className="bg-primary px-10 py-3 self-center rounded-xl mt-8"
        >
          Upload
        </button>
      </form>
    </div>
  )
}

export default Upload
