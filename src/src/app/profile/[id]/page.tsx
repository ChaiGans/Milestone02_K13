"use client"
import { useState } from "react"
import CardLombaProfile from "@/components/CardLombaProfie"
import { useSession } from "next-auth/react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CgProfile } from "react-icons/cg"

function Profile() {
  const { data: session } = useSession()
  console.log(session?.user)
  const profileData = [
    {
      id: 1,
      coordinator: "T8CHNOFEST",
      category: "E-SPORTS",
      timeleft: "H-24",
      image: "/assets/S__60047731.svg",
      status: "Aktif",
    },
    {
      id: 2,
      coordinator: "T8CHNOFEST",
      category: "E-SPORTS",
      timeleft: "H-24",
      image: "/assets/S__60047731.svg",
      status: "Aktif",
    },
  ]

  if (session && session.user) {
    return (
      <div className="flex flex-col space-y-4 justify-center items-center lg:flex-row lg:space-x-4 xl:space-x-48 lg:items-start">
        <section className="flex w-full bg-white rounded-lg flex-col justify-center items-center py-7 px-6">
          {/* <img
            src="/assets/166041.svg"
            alt="Profile"
            className="rounded-full h-[100px] w-[100px] object-cover object-center mb-3"
          /> */}
          <CgProfile size={128} className="text-primary-foreground" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-black font-poppinsbold text-lg">
              {session.user.name}
            </p>
            <p className="text-[#505688] font-latoregular text-xs">
              {session.user.email}
            </p>
            {/* <p className="text-gray-500 font-latoregular text-sm">
              SMAN 8 JAKARTA
            </p> */}
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
                <p className="text-center text-xs">Matematika</p>
              </div>
              <div className="flex flex-col flex-1 bg-yellow-400 h-[140px] rounded-lg items-center justify-center space-y-4 px-1">
                <img
                  className="w-[50px] h-[50px]"
                  src="/assets/trophy.svg"
                ></img>
                <p className="text-center text-xs">E-Sports</p>
              </div>
              <div className="flex flex-col flex-1 bg-yellow-400 h-[140px] rounded-lg items-center justify-center space-y-4 px-1">
                <img
                  className="w-[50px] h-[50px]"
                  src="/assets/robotika.svg"
                ></img>
                <p className="text-center text-xs">Robotik</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col space-y-4">
          {/* <section className="flex flex-row justify-between w-full text-center font-poppinssb text-xs">
            <button className="flex-1">Lomba Yang Diikuti (0)</button>
            <button className="flex-1 border-b-2 border-b-white py-2">
              Lomba Yang Diunggah (1)
            </button>
          </section>
          {profileData.map((item, index) => (
            <div key={index} className="w-full">
              <CardLombaProfile
                image={item.image}
                coordinator={item.coordinator}
                category={item.category}
                timeleft={item.timeleft}
                status={item.status}
              ></CardLombaProfile>
            </div>
          ))} */}
          <div>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Lomba Yang Diikuti ()</TabsTrigger>
                <TabsTrigger value="password">
                  Lomba Yang Diunggah ()
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="bg-foreground text-primary-foreground">Hai</div>
              </TabsContent>
              <TabsContent value="password">
                <div className="bg-foreground text-primary-foreground">
                  Halo
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
