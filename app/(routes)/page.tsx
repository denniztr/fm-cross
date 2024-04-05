import Image from 'next/image';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getAllEvents from '@/app/actions/getAllEvents';

import LoginButton from '@/components/LoginButton';
import Categories from '@/components/category/Categories';
import EventCard from '@/components/EventCard';
import ArticleCard from '@/components/ArticleCard';
import SortButtons from '@/components/SortButtons';

import { Input } from '@/components/ui/input';

export default async function Home() {
  const currentUser = await getCurrentUser();
  const allEvents = await getAllEvents();

  return (
    <main className="container">
      <section className="py-6 lg:py-0 lg:flex lg:justify-evenly lg:flex-row lg:flex-wrap lg:items-center">
        <div className="space-y-8 lg:w-1/2">
          <h1 className="font-semibold px-12 text-center text-xl  md:px-8 md:text-2xl lg:px-0 lg:text-4xl lg:text-left">
            Платформа для людей, где с общих интересов начинается дружба
          </h1>
          <p className="leading-7 text-center lg:text-left">
            Какие бы ни были у вас интересы, от туризма и чтения до общения и
            желания поделиться своими умениями, вы всегда найдете в{' '}
            <span className="text-testColor font-bold">МестоВстречи</span>{' '}
            людей, которые разделяют их. Мероприятия проводятся каждый день —
            зарегистрируйтесь и присоединяйтесь!
          </p>
          <div className="w-full md:px-32 lg:hidden">
            <Input placeholder="Поиск мероприятий" />
          </div>
          <div className="flex justify-center items-center lg:block">
            {currentUser ? (
              <LoginButton href="/events">Найти мероприятие</LoginButton>
            ) : (
              <LoginButton href="/signup">Присоединиться</LoginButton>
            )}
          </div>
        </div>
        <div className="hidden relative lg:block lg:w-[450px] lg:h-[450px]">
          <Image src="/dayflow.svg" fill alt="FrontImage" />
        </div>
      </section>
      <section className="py-10 space-y-10">
        <h2 className="font-semibold text-xl lg:text-2xl">
          Популярные категории
        </h2>
        <Categories />
        <div className="flex justify-center items-center">
          <p className="underline-offset-4 hover:underline cursor-pointer">
            Посмотреть все категории
          </p>
        </div>
      </section>
      <section>
        <h2 className="font-semibold text-xl lg:text-2xl">
          Предстоящие мероприятия
        </h2>
        <div className="w-full overflow-auto my-6 border-b">
          <SortButtons />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {allEvents?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
      <section className="pt-20">
        <h2 className="font-semibold text-2xl">
          Предстоящие онлайн-мероприятия
        </h2>
        <div className="pt-10">{/* <EventCard /> */}</div>
      </section>
      <section className="pt-20">
        <h2 className="font-semibold text-2xl">
          <span className="">Логотип</span> - это место где начинается дружба!
        </h2>
        <div className="pt-10 flex gap-3 flex-wrap">
          <ArticleCard />
        </div>
      </section>
    </main>
  );
}
