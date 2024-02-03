import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function prismaExample() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Elliott',
  //     email: 'xelliottx@example-user.com',
  //   },
  // })

  return await prisma.user.findMany()
}
