import { PrismaClient } from '@prisma/client'

export default eventHandler(async () => {
  const prisma = new PrismaClient()
  const comments = await prisma.comment.findMany({
    orderBy: {
      id: 'desc',
    },
  })
  return { comments, message: 'Comments successfully fetched' }
})
