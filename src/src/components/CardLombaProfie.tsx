import Image from "next/image"
import Link from "next/link"

interface CardLomba {
  id: string
  image: string
  coordinator: string
  category: string
}

export default function CardLombaProfile({
  id,
  image,
  coordinator,
  category,
}: CardLomba) {
  return (
    <div className="w-full bg-white rounded-lg flex flex-row px-5 py-4">
      <Image
        alt={coordinator}
        src={image}
        width={300}
        height={0}
        className="h-[240px] w-[180px] object-cover object-center"
      ></Image>
      <div className="flex-1 px-2 py-3 flex flex-col justify-between">
        <div>
          <p className="font-poppinsbold text-md text-black">{coordinator}</p>
          <p className="font-poppinslight text-xs text-black">{category}</p>
        </div>
        <Link
          href={`/competitions/${id}`}
          className="self-start bg-primary text-xs font-latoregular text-primary-foreground px-4 py-3 rounded-lg max-w-[400px] hover:bg-yellow-600"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}
