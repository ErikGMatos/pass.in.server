import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'b30a088d-3a7b-49ce-8a29-c3e610adb082',
      title: 'Unite Sumit',
      slug: 'unite-sumit',
      details: 'Um evento para devs apaixonados por código!',
      maximumAttendees: 120
    }
  })

}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})