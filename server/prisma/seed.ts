import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  prisma.habit.create({
    data: {
      tittle: "beber 2 litro de coca",
      created_at: new Date('2023-01-10T00:00:00:000z')
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })
