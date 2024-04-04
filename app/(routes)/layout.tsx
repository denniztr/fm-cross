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
      <Header currentUser={currentUser!} />
      <div className="container bg-black/30">{children}</div>
      <Footer />
    </div>
  );
}
