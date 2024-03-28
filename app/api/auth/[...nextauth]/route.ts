import NextAuth, { AuthOptions } from 'next-auth';
import prisma from '@/app/libs/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Проверьте правильность введённых данных');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Такой пользователь не существует');
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordMatch) {
          throw new Error('Неверный пароль');
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };