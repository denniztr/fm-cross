import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/[...nextauth]/route';


export default async function getSession() {
  return await getServerSession(authOptions)
}