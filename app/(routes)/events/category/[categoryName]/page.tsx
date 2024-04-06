import getEventsByCategory from '@/app/actions/getEventsByCategory';

import EventCard from '@/components/EventCard';
import translate from '@/app/_utils/translateString';
import SearchEvents from '@/components/SearchEvents';

export default async function Home({
  params: { categoryName },
}: {
  params: { categoryName: string };
}) {
  const events = await getEventsByCategory(translate(categoryName));

  return (
    <main>
      <section className="py-10 bg-black">
        <div className="space-y-8">
          <h1 className="font-semibold text-2xl text-center text-white">
            Поиск мероприятия
          </h1>
          <div className="mx-auto max-w-[800px] px-10 lg:px-0">
            <SearchEvents />
          </div>
        </div>
      </section>
      <section className="container py-10">
        <div>
          <h1 className="pb-6 font-semibold text-2xl">
            {translate(categoryName)}
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {events?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
