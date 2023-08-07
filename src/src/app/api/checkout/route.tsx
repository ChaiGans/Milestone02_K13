import prisma from "@/lib/prisma"

interface RequestBody {
  name: string
  category: string
  poster: string
  userId: string
  lombaId: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  console.log(body)

  const compete = await prisma.compete.create({
    data: {
      name: body.name,
      category: body.category,
      poster: body.poster,
      userId: body.userId,
      lombaId: body.lombaId,
    },
  })

  return new Response(JSON.stringify(compete))
}
