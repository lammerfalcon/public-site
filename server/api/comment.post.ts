import { PrismaClient } from '@prisma/client'

import { z } from 'zod'

export default eventHandler(async (event) => {
  const prisma = new PrismaClient()
  const { body } = await readValidatedBody(event, z.object({
    body: z.string().trim().min(1),
  }).parse)
  const { user } = await requireUserSession(event)

  if (!user) {
    setResponseStatus(event, 422)
    return {
      body: 'Author is required',
    }
  }

  // Попробуйте найти комментарий по userId
  const existingComment = await prisma.comment.findFirst({
    where: {
      author: user.username,
    },
  })
  if (existingComment) {
    // Если комментарий существует, обновляем его
    const updatedComment = await prisma.comment.update({
      where: {
        id: existingComment.id,
      },
      data: {
        body,
      },
    })
    return { res: updatedComment }
  }
  else {
    // Если комментария нет, создаем новый
    const newComment = await prisma.comment.create({
      data: {
        body,
        author: user.username,
      },
    })
    return { res: newComment }
  }
})
