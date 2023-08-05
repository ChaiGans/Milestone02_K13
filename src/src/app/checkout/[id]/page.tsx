"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import isEmpty from "lodash.isempty"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

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

const Checkout = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [lomba, setLomba] = useState<Lomba>()

  useEffect(() => {
    fetch("/api/competitions")
      .then((response) => response.json())
      .then((data) =>
        setLomba(data.filter((comp: any) => params.id === comp.id)[0])
      )
  }, [])

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        name: lomba?.name,
        category: lomba?.category,
        poster: lomba?.poster,
        userId: session?.user.id,
      }),
    })
    router.push("/")
  }

  if (!isEmpty(lomba)) {
    return (
      <div>
        <h1 className="mb-8">Checkout</h1>
        <div className="flex justify-between">
          <main className="flex bg-foreground text-primary-foreground p-8 gap-16 rounded-xl">
            <Image alt={lomba.name} src={lomba.poster} width={200} height={0} />
            <h2 className="max-w-sm">{lomba.name}</h2>
            <h3 className="self-end">{lomba.price}</h3>
          </main>
          <section className="flex flex-col bg-foreground text-primary-foreground p-8 gap-8 rounded-xl">
            <h2>Summary</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between gap-48">
                <p>Biaya Perlombaan</p>
                <p>{lomba.price}</p>
              </div>
              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>{Math.round(lomba.price * 0.1)}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Total</p>
                <p>{Math.round(lomba.price * 1.1)}</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-primary self-center px-8 py-3 rounded-xl"
            >
              Checkout
            </button>
          </section>
        </div>
      </div>
    )
  }
}

export default Checkout
