import getAllEvents from '@/app/actions/getAllEvents';
import EventCard from '@/components/EventCard';

export default async function Home() {
  const events = await getAllEvents();

  return (
    <main>
      Поиск, сортировка и список всех мероприятий на этой странице
      <div className="flex gap-3">
        {events?.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </main>
  );
}
