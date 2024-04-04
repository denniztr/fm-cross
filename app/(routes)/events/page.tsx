import getAllEvents from '@/app/actions/getAllEvents';
import EventCard from '@/components/EventCard';

export default async function Home() {
  const events = await getAllEvents();

  return (
    <main>
      Поиск, сортировка и список всех мероприятий на этой странице
      <section className="pt-10">
        <h1 className="font-semibold text-2xl">Все мероприятия</h1>
        <div className="flex gap-4 pt-10">
          {events?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
