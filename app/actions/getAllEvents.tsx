import prisma from '@/app/libs/prismadb';

export default async function getAllEvents(query: string) {
  try {
    const events = await prisma.event.findMany({
      include: {
        author: true,
      },
    });

    if (query) {
      const event = await prisma.event.findMany({
        where: {
          title: {
            contains: query,
          },
        },
      });
      return event
    }

    return events;

  } catch (error) {
    return null;
  }
}
