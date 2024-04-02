import Image from 'next/image';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getAllEvents from '@/app/actions/getAllEvents';


import LoginButton from '@/components/LoginButton';
import Categories from '@/components/category/Categories';
import EventCard from '@/components/EventCard';
import ArticleCard from '@/components/ArticleCard';

export default async function Home() {
  const currentUser = await getCurrentUser();
  const allEvents = await getAllEvents();

  return (
    <main className="h-full">
      <section className="flex flex-row flex-wrap items-center">
        <div className="w-1/2 space-y-8">
          <h1 className="font-semibold text-4xl">
            Платформа для людей, где с общих интересов начинается дружба
          </h1>
          <p className="leading-7 pb-8">
            Какие бы ни были у вас интересы, от туризма и чтения до общения и
            желания поделиться своими умениями, вы всегда найдете в{' '}
            <span className="text-testColor font-bold">МестоВстречи</span>{' '}
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
      <section className="">
        <h2 className="font-semibold text-2xl">Популярные категории</h2>
        <Categories />
      </section>
      <section className="pt-20">
        <h2 className="font-semibold text-2xl">Предстоящие мероприятия</h2>
        <div className="pt-10">
          {allEvents?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
          {/* <EventCard /> */}
        </div>
      </section>
      <section className="pt-20">
        <h2 className="font-semibold text-2xl">
          Предстоящие онлайн-мероприятия
        </h2>
        <div className="pt-10">
          <EventCard />
        </div>
      </section>
      <section className="pt-20">
        <h2 className="font-semibold text-2xl">
          <span className="">Логотип</span> - это место где начинается
          дружба!
        </h2>
        <div className="pt-10 flex gap-3">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>
    </main>
  );
}
