import Image from 'next/image';
import getCurrentUser from '@/app/actions/getCurrentUser';

import LoginButton from '@/components/LoginButton';

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <main className="h-full">
      <section className="flex flex-row flex-wrap items-center">
        <div className="w-1/2 space-y-8">
          <h1 className="font-semibold text-4xl">
            <span className="text-testColor">Платформа</span> для людей, где с
            общих интересов начинается дружба
          </h1>
          <p className="leading-7 pb-8">
            Какие бы ни были у вас интересы, от туризма и чтения до общения и
            желания поделиться своими умениями, вы всегда найдете в{' '}
            <span className="text-titleColor font-semibold">МестоВстречи</span>{' '}
            людей, которые разделяют их. Мероприятия проводятся каждый день —
            зарегистрируйтесь и присоединяйтесь!
          </p>
          {currentUser ? (
            <LoginButton href="/events">Найти мероприятие</LoginButton>
          ) : (
            <LoginButton href="/signup">Присоединиться</LoginButton>
          )}
        </div>
        <div className="relative w-[500px] h-[500px]">
          <Image src="/dayflow.svg" fill alt="FrontImage" />
        </div>
      </section>
      <section className="pt-6">
        <h2 className="font-semibold text-2xl">Популярные категории</h2>
        <ul className="flex justify-between space-x-2 pt-4">
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Бизнес
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Искусство и музыка
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Вечеринки
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Здоровье и фитнесс
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Детские мероприятия
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Воркшопы
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Путешествия и отдых на природе
          </li>
          <li className="cursor-pointer text-primary underline-offset-4 hover:underline">
            Спорт
          </li>
        </ul>
      </section>
      <section className="pt-20">
        <h2 className="font-semibold text-2xl">Предстоящие мероприятия</h2>
        <div className="pt-4">Карточки с мероприятиями</div>
      </section>
    </main>
  );
}
