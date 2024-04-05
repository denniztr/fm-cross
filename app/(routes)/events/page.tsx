import getAllEvents from '@/app/actions/getAllEvents';
import getFilteredEvents from '@/app/actions/getFilteredEvents';

import EventCard from '@/components/EventCard';
import SearchEvents from '@/components/SearchEvents';


export default async function Home({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const events = await getAllEvents();

  if (query) {
    const filteredEvents = await getFilteredEvents(query);
    // console.log(filteredEvents)
  }

  return (
    <main>
      <section className="py-10 bg-black">
        <div className="space-y-8">
          <h1 className="font-semibold text-2xl text-center text-white">
            Поиск мероприятия
          </h1>
          <div className="mx-auto max-w-[800px] px-10 lg:px-0">
            <SearchEvents />
            {/* <Input placeholder="Поиск мероприятия" className="bg-white/90" />
            <Button className="bg-white text-black hover:bg-white">
              Поиск
            </Button> */}
          </div>
        </div>
      </section>
      <section className="container py-10">
        <h2 className="pb-6 font-semibold text-xl lg:text-2xl">
          Все мероприятия
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {events?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
