import prisma from '@/app/libs/prismadb';

export default async function getEventById(id: string) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: id
      },
      include: {
        author: true
      }
    })

    return event
  } catch (error) {
    return null;
  }
}
