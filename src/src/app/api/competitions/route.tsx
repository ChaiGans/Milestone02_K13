import prisma from "@/lib/prisma"

interface RequestBody {
  name: string
  description: string
  registrationDate: string
  price: number
  contact: string
  poster: string
  userId: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const lomba = await prisma.lomba.create({
    data: {
      name: body.name,
      description: body.description,
      registrationDate: body.registrationDate,
      price: body.price,
      contact: body.contact,
      poster: convertGoogleDriveURL(body.poster),
      userId: body.userId,
    },
  })

  return new Response(JSON.stringify(lomba))
}

export async function GET(request: Request) {
  const lomba = await prisma.lomba.findMany()

  return new Response(JSON.stringify(lomba))
}

function convertGoogleDriveURL(url: string): string {
  const regex = /\/file\/d\/([^/]+)\/view/
  const match = url.match(regex)

  // if (!match || match.length < 2) {
  //   throw new Error("Invalid Google Drive sharing URL")
  // }

  const fileId = match![1]
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}
