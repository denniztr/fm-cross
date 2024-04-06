import prisma from '@/app/libs/prismadb';

export default async function getEventsByCategory(category: string) {
  try {
    const events = await prisma.event.findMany({
      where: {
        category: {
          contains: category
        }
      },
      include: {
        author: true
      }
    })

    return events
  } catch (error) {
    return null
  }
}