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
  category: string
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
      .then((data) => setOrganizer(data?.name))
  }, [lomba])
  // console.log(organizer)

  if (!isEmpty(lomba)) {
    return (
      <div className="font-latoregular">
        <h3>{lomba.category}</h3>
        <h1 className="mb-8 font-poppinsbold">{lomba.name}</h1>
        <div className="flex flex-col xl:flex-row justify-between gap-12 mb-36 xl:mb-16">
          <main className="self-center">
            <Image alt={lomba.name} src={lomba.poster} width={400} height={0} />
          </main>
          <section className="flex flex-col self-center xl:self-start gap-4 max-w-3xl">
            <p>{lomba.description}</p>
            <p>Deadline Pendaftaran: {lomba.registrationDate}</p>
            <p>
              Biaya Pendaftaran:{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(lomba.price)}
            </p>
            <p>Contact Person: {lomba.contact}</p>
            <Link
              href={`/checkout/${lomba.id}`}
              className="font-bold bg-primary hover:bg-yellow-600 text-primary-foreground px-12 py-3 self-center xl:self-baseline rounded-lg"
            >
              Daftar
            </Link>
          </section>
        </div>
        <div className="flex flex-col text-center xl:text-start xl:flex-row gap-6">
          <main className="self-center">
            <CgProfile size={128} />
          </main>
          <section className="flex flex-col self-center gap-4">
            <h3 className="font-poppinsbold">{organizer}</h3>
            <a
              href={`https://wa.me/${lomba.contact}`}
              className="font-bold bg-primary hover:bg-yellow-600 text-primary-foreground px-8 py-2 self-baseline rounded-lg"
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
