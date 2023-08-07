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
    <div className="w-full bg-white rounded-lg flex flex-col sm:flex-row sm:items-stretch items-center text-center sm:text-start px-5 py-4">
      <Image
        alt={coordinator}
        src={image}
        width={300}
        height={0}
        className="h-[240px] w-[180px] object-cover object-center"
      />
      <div className="flex-1 px-2 py-3 flex flex-col justify-between">
        <div>
          <p className="font-poppinsbold text-lg text-black">{coordinator}</p>
          <p className="font-latoregular text-black">{category}</p>
        </div>
        <Link
          href={`/competitions/${id}`}
          className="self-center sm:self-start bg-primary font-latobold font-bold text-primary-foreground px-4 py-3 rounded-lg max-w-[400px] hover:bg-yellow-600"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}
