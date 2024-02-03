import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

async function main() {
  const prisma = new PrismaClient()

  try {
    const fakeComments = Array.from({ length: 50 }, () => ({
      author: faker.internet.userName(),
      body: faker.lorem.paragraph(),
    }))

    await prisma.comment.createMany({
      data: fakeComments,
    })
  }
  catch (error) {
    console.error('Error seeding data:', error)
  }
  finally {
    await prisma.$disconnect()
  }
}

main()
