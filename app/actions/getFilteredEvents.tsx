import prisma from '@/app/libs/prismadb'

export default async function getFilteredEvents(query: string) {
  try {
    console.log(query)
    const events = await prisma.event.findMany({
      where: {
        title: {
          contains: query
        }
      }
    })
    
    console.log(events)
    return events
  } catch (error) {
    return null
  }
}