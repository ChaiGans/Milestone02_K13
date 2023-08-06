"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { CgProfile } from "react-icons/cg"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useRouter } from "next/navigation"

interface profileData {
  id: string
  name: string
  email: string
  instance: string
  lomba1: string
  lomba2: string
  lomba3: string
}

const Editprofile = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [dataProfile, setDataProfile] = useState<profileData>({
    id: "",
    name: "",
    email: "",
    instance: "",
    lomba1: "",
    lomba2: "",
    lomba3: "",
  })

  useEffect(() => {
    fetch(`/api/user/${session?.user.id}`)
      .then((response) => response.json())
      .then((data) => {
        const { fave, ...otherData } = data
        const [lomba1, lomba2, lomba3] = fave
        setDataProfile({ ...otherData, lomba1, lomba2, lomba3 })
      })
  }, [session?.user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch(`/api/user/${session?.user.id}`, {
      method: "PATCH",
      body: JSON.stringify(dataProfile),
    })
    router.push(`/profile/${session?.user.id}`)
  }

  if (session && session.user && dataProfile) {
    return (
      <div className="container mx-auto p-2 sm:p-4 max-w-4xl rounded-lg bg-white min-h-fit text-black ">
        <div className="container p-0 my-5 text-center">
          <h1 className="text-center sm:text-left font-poppinsbold text-4xl sm:text-5xl xl:text-[50px] ml-6 ">
            Detail Profil
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p>Foto Profil</p>
          <CgProfile size={150} className="text-primary-foreground mb-8" />
        </div>
        <form onSubmit={handleSubmit} method="patch">
          <div className="grid grid-rows-3 grid-flow-col grid-cols-2 gap-4 px-2 sm:px-10">
            <div>
              <label className="md:block">Nama</label>
              <input
                type="text"
                className="border-2 border-zinc-500 w-full sm:w-full p-3 mt-2 rounded-lg"
                placeholder=""
                value={dataProfile.name ? dataProfile.name : ""}
                onChange={(e) =>
                  setDataProfile((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className="md:block">Alamat Email</label>
              <input
                disabled
                type="email"
                className="border-2 border-zinc-500 w-full sm:w-full p-3 mt-2 rounded-lg "
                value={dataProfile.email ? dataProfile.email : ""}
              />
            </div>
            <div>
              <label className="md:block">Asal Instansi</label>
              <input
                type="text"
                className="border-2 border-zinc-500 w-full sm:w-full p-3 mt-2 rounded-lg"
                placeholder=""
                value={dataProfile.instance ? dataProfile.instance : ""}
                onChange={(e) =>
                  setDataProfile((prevData) => ({
                    ...prevData,
                    instance: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label className="md:block">Lomba 1</label>
              <Select
                onValueChange={(value) =>
                  setDataProfile((prevData) => ({ ...prevData, lomba1: value }))
                }
                required
              >
                <SelectTrigger className="border-2 border-zinc-500 w-full sm:w-full py-6 mt-2 rounded-lg">
                  <SelectValue
                    placeholder={
                      dataProfile.lomba1 ? dataProfile.lomba1 : "Lomba"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seni">Seni</SelectItem>
                  <SelectItem value="Olahraga">Olahraga</SelectItem>
                  <SelectItem value="Akademik">Akademik</SelectItem>
                  <SelectItem value="Kewirausahaan">Kewirausahaan</SelectItem>
                  <SelectItem value="Fashion">Fashion</SelectItem>
                  <SelectItem value="Kuliner">Kuliner</SelectItem>
                  <SelectItem value="Teknologi">Teknologi</SelectItem>
                  <SelectItem value="Bahasa">Bahasa</SelectItem>
                  <SelectItem value="Multimedia">Multimedia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="md:block">Lomba 2</label>
              <Select
                onValueChange={(value) =>
                  setDataProfile((prevData) => ({ ...prevData, lomba2: value }))
                }
                required
              >
                <SelectTrigger className="border-2 border-zinc-500 w-full sm:w-full py-6 mt-2 rounded-lg">
                  <SelectValue
                    placeholder={
                      dataProfile.lomba2 ? dataProfile.lomba2 : "Lomba"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seni">Seni</SelectItem>
                  <SelectItem value="Olahraga">Olahraga</SelectItem>
                  <SelectItem value="Akademik">Akademik</SelectItem>
                  <SelectItem value="Kewirausahaan">Kewirausahaan</SelectItem>
                  <SelectItem value="Fashion">Fashion</SelectItem>
                  <SelectItem value="Kuliner">Kuliner</SelectItem>
                  <SelectItem value="Teknologi">Teknologi</SelectItem>
                  <SelectItem value="Bahasa">Bahasa</SelectItem>
                  <SelectItem value="Multimedia">Multimedia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="md:block">Lomba 3</label>
              <Select
                onValueChange={(value) =>
                  setDataProfile((prevData) => ({ ...prevData, lomba3: value }))
                }
                required
              >
                <SelectTrigger className="border-2 border-zinc-500 w-full sm:w-full py-6 mt-2 rounded-lg">
                  <SelectValue
                    placeholder={
                      dataProfile.lomba3 ? dataProfile.lomba3 : "Lomba"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seni">Seni</SelectItem>
                  <SelectItem value="Olahraga">Olahraga</SelectItem>
                  <SelectItem value="Akademik">Akademik</SelectItem>
                  <SelectItem value="Kewirausahaan">Kewirausahaan</SelectItem>
                  <SelectItem value="Fashion">Fashion</SelectItem>
                  <SelectItem value="Kuliner">Kuliner</SelectItem>
                  <SelectItem value="Teknologi">Teknologi</SelectItem>
                  <SelectItem value="Bahasa">Bahasa</SelectItem>
                  <SelectItem value="Multimedia">Multimedia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col mt-20 mb-10">
            <button
              type="submit"
              className="bg-primary hover:bg-yellow-600 focus:outline-none focus:ring rounded-lg mx-auto px-20 py-4 font-poppinsbold  "
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    )
  } else {
    return <div>Error</div>
  }
}

export default Editprofile
