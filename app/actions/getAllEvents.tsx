import prisma from '@/app/libs/prismadb';

export default async function getAllEvents(query: string, categoryName: string) {
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
        include: {
          author: true,
        }
      });
      return event
    }

    return events;

  } catch (error) {
    return null;
  }
}
