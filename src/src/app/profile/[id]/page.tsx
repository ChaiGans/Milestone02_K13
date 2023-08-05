"use client"

import { useState, useEffect } from "react"
import CardLombaProfile from "@/components/CardLombaProfie"
import { useSession } from "next-auth/react"
import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CgProfile } from "react-icons/cg"
import Link from "next/link"

interface dataLomba {
  id: string
  name: string
  category: string
  poster: string
}

interface profileData {
  id: string
  name: string
  email: string
  instance: string
  lomba1: string
  lomba2: string
  lomba3: string
}

function Profile() {
  const { data: session } = useSession()

  const [competeData, setCompeteData] = useState<dataLomba[]>([])
  const [lombaData, setLombaData] = useState<dataLomba[]>([])
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
    fetch(`/api/compete/${session?.user.id}`)
      .then((response) => response.json())
      .then((data) => setCompeteData(data))
  }, [session?.user])

  useEffect(() => {
    fetch(`/api/competitions/${session?.user.id}`)
      .then((response) => response.json())
      .then((data) => setLombaData(data))
  }, [session?.user])

  useEffect(() => {
    fetch(`/api/user/${session?.user.id}`)
      .then((response) => response.json())
      .then((data) => {
        const { fave, ...otherData } = data
        const [lomba1, lomba2, lomba3] = fave
        setDataProfile({ ...otherData, lomba1, lomba2, lomba3 })
      })
  }, [session?.user])

  if (session && session.user && dataProfile && competeData) {
    return (
      <div className="flex flex-col space-y-4 justify-center items-center lg:flex-row lg:space-x-4 xl:space-x-48 lg:items-start">
        <section className="flex w-full bg-white rounded-lg flex-col justify-center items-center py-7 px-6">
          <Link href={`/edit-profile/${session.user.id}`} className="self-end">
            <Image alt="edit" src="/assets/edit 1.svg" width={32} height={32} />
          </Link>
          <CgProfile size={128} className="text-primary-foreground" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-black font-poppinsbold text-lg">
              {dataProfile.name}
            </p>
            <p className="text-[#505688] font-latoregular text-xs">
              {dataProfile.email}
            </p>
            <p className="text-gray-500 font-latoregular text-sm">
              {dataProfile.instance}
            </p>
          </div>
          <div className="w-full">
            <p className="text-center text-black font-latoregular text-sm mt-7 mb-3">
              Perlombaan yang diminati
            </p>
            <div className="flex flex-row items-center text-xs text-black space-x-2">
              <div className="flex flex-col flex-1 bg-yellow-400 h-[140px] rounded-lg items-center justify-center space-y-4 px-1">
                <img
                  className="w-[50px] h-[50px]"
                  src="/assets/matematika.svg"
                ></img>
                <p className="text-center text-xs">{dataProfile.lomba1}</p>
              </div>
              <div className="flex flex-col flex-1 bg-yellow-400 h-[140px] rounded-lg items-center justify-center space-y-4 px-1">
                <img
                  className="w-[50px] h-[50px]"
                  src="/assets/trophy.svg"
                ></img>
                <p className="text-center text-xs">{dataProfile.lomba2}</p>
              </div>
              <div className="flex flex-col flex-1 bg-yellow-400 h-[140px] rounded-lg items-center justify-center space-y-4 px-1">
                <img
                  className="w-[50px] h-[50px]"
                  src="/assets/robotika.svg"
                ></img>
                <p className="text-center text-xs">{dataProfile.lomba3}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col space-y-4">
          <div>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">
                  Lomba Yang Diikuti ({competeData.length})
                </TabsTrigger>
                <TabsTrigger value="password">
                  Lomba Yang Diunggah ({lombaData.length})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="bg-foreground text-primary-foreground rounded-xl">
                  {competeData.map((item, index) => (
                    <div key={index} className="w-full">
                      <CardLombaProfile
                        id={item.id}
                        image={item.poster}
                        coordinator={item.name}
                        category={item.category}
                      ></CardLombaProfile>
                      {index === competeData.length - 1 ? "" : <hr />}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="bg-foreground text-primary-foreground rounded-xl">
                  {lombaData.map((item, index) => (
                    <div key={index} className="w-full">
                      <CardLombaProfile
                        id={item.id}
                        image={item.poster}
                        coordinator={item.name}
                        category={item.category}
                      ></CardLombaProfile>
                      <hr />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
