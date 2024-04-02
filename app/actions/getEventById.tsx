import prisma from '@/app/libs/prismadb';

export default async function getEventById({ id }) {
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

// const getEventById = async ({ id }: { id: string }) => {
//   try {
//     const event = await prisma.event.findUnique({
//       where: {
//         id: id
//       }
//     })

//     return event
//   } catch (error) {
//     return null;
//   }
// };

// export default getEventById;
