import getEventsByCategory from '@/app/actions/getEventsByCategory';

import EventCard from '@/components/EventCard';
import translate from '@/app/_utils/translateString';


export default async function Home({
  params: { categoryName },
}: {
  params: { categoryName: string };
}) {

  const events = await getEventsByCategory(translate(categoryName));
  
  return (
    <main className="container">
      <div>Страница категории {categoryName}</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {events?.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </main>
  );
}
