import prisma from '@/app/libs/prismadb'

export default async function getAllEvents() {
  try {
    const events = await prisma.event.findMany()
    return events
  } catch (error) {
    return null
  }
}