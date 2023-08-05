import prisma from "@/lib/prisma"

interface RequestBody {
  name: string
  email: string
  instance: string
  lomba1: string
  lomba2: string
  lomba3: string
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
    const { password, balance, ...userWithoutPass } = user
    return new Response(JSON.stringify(userWithoutPass))
  } else {
    return new Response(JSON.stringify(null))
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body: RequestBody = await request.json()

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      id: params.id,
    },
  })

  if (user) {
    console.log(user.fave)

    const updatedUser = await prisma.user.update({
      where: {
        email: body.email,
      },
      data: {
        name: body.name,
        instance: body.instance,
        fave: [body.lomba1, body.lomba2, body.lomba3],
      },
    })

    return new Response(JSON.stringify(updatedUser))
  }

  return new Response(JSON.stringify(null))
}
