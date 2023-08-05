"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"

import isEmpty from "lodash.isempty"
import { CgProfile } from "react-icons/cg"

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

function Competition({ params }: { params: { slug: string } }) {
  const [lomba, setLomba] = useState<Lomba>()
  const [organizer, setOrganizer] = useState("")

  useEffect(() => {
    fetch("/api/competitions")
      .then((response) => response.json())
      .then((data) =>
        setLomba(data.filter((comp: any) => params.slug === comp.id)[0])
      )
  }, [])

  // console.log(lomba)
  useEffect(() => {
    fetch(`/api/user/${lomba?.userId}`)
      .then((response) => response.json())
      .then((data) => setOrganizer(data))
  }, [lomba])
  // console.log(organizer)

  if (!isEmpty(lomba)) {
    return (
      <div>
        <h1 className="mb-8">{lomba.name}</h1>
        <div className="flex gap-48 mb-16">
          <main>
            <Image
              alt={lomba.name}
              src={lomba.poster}
              width={400}
              height={0}
            ></Image>
          </main>
          <section className="flex flex-col gap-4 max-w-3xl">
            <p>{lomba.description}</p>
            <p>Deadline Pendaftaran: {lomba.registrationDate}</p>
            <p>Biaya Pendaftaran: {lomba.price}</p>
            <p>Contact Person: {lomba.contact}</p>
            <Link
              href={`/checkout/${lomba.id}`}
              className="bg-primary text-primary-foreground px-12 py-3 self-baseline rounded-lg"
            >
              Daftar
            </Link>
          </section>
        </div>
        <div className="flex gap-6">
          <main>
            <CgProfile size={128} />
          </main>
          <section className="flex flex-col self-center gap-4">
            <h3>{organizer}</h3>
            <a
              href={`https://wa.me/${lomba.contact}`}
              className="bg-primary text-primary-foreground px-8 py-2 self-baseline rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kontak Kami
            </a>
          </section>
        </div>
      </div>
    )
  }
  return <div>Page Not Found</div>
}

export default Competition
