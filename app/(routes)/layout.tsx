import User from '@prisma/client';
import getCurrentUser from '@/app/actions/getCurrentUser';
import Header from '@/components/Header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      {/* пофиксить ошибку тс */}
      <Header currentUser={currentUser!} />
      <div className="w-[1200px] m-auto">{children}</div>
    </div>
  );
}
