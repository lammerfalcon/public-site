import { PrismaClient } from '@prisma/client'

export default eventHandler(async () => {
  const prisma = new PrismaClient()
  const comments = await prisma.comment.findMany()
  return { comments, message: 'Comments successfully fetched' }
})
