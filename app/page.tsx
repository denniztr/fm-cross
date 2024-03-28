import getCurrentUser from '@/app/actions/getCurrentUser';
import SignOut from '@/components/SignOut';

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Главная страница
      <div>
        <p>
          user: {currentUser?.name} {currentUser?.surname} {currentUser?.email}
        </p>
        <SignOut />
      </div>
    </main>
  );
}
