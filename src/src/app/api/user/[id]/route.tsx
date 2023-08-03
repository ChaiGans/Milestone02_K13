import prisma from "@/lib/prisma"

interface RequestBody {
  name: string
  username: string
  password: string
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })

  if (user) {
    return new Response(JSON.stringify(user.name))
  } else {
    return new Response(JSON.stringify(null))
  }
}
