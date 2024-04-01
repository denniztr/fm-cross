import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  try {
    const body = await request.json();
    const {
      category,
      description,
      eventType,
      location,
      startDate,
      startTime,
      title,
    } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        location,
        startDate,
        startTime,
        eventType,
        category,
        author: {
          connect: {
            id: currentUser.id,
          },
        },
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error: any) {
    console.log(error, 'ADDINGPOST_ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
