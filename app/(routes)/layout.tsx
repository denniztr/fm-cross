import getCurrentUser from '@/app/actions/getCurrentUser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <div className="">
      {/* пофиксить ошибку тс */}
      <Header currentUser={currentUser!} className="hidden lg:block" />
      <div className="container bg-black/10">{children}</div>
      <Footer />
    </div>
  );
}
