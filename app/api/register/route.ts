import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, surname, password } = body;

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      throw new NextResponse('Пользователь с таким email уже зарегистрирован', {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        surname,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Error здесь', { status: 500 });
  }
}
