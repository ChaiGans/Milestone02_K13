import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const lomba = await prisma.compete.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      name: true,
      category: true,
      poster: true,
      lombaId: true,
    },
  })

  if (lomba) {
    return new Response(JSON.stringify(lomba))
  } else {
    return new Response(JSON.stringify(null))
  }
}
