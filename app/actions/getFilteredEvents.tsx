import prisma from '@/app/libs/prismadb'

export default async function getFilteredEvents(query: string) {
  try {
    console.log(query)
    // const filteredEvents = await prisma.event.findMany({
    //   where: {
    //     title: {
    //       contains: q
    //     }
    //   }
    // })

    // return filteredEvents
  } catch (error) {
    return null
  }
}