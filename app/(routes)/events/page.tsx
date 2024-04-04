import getAllEvents from '@/app/actions/getAllEvents';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

export default async function Home() {
  const events = await getAllEvents();

  return (
    <main>
      <section className="py-10 bg-black">
        <div className="space-y-8">
          <h1 className="font-semibold text-2xl text-center text-white">
            Поиск мероприятия
          </h1>
          <div className="mx-auto max-w-[800px] flex gap-2 px-10 lg:px-0">
            <Input placeholder="Поиск мероприятия" className="bg-white/90" />
            <Button className="bg-white text-black hover:bg-white">
              Поиск
            </Button>
          </div>
        </div>
      </section>
      <section className="container py-10">
        <h2 className="pb-6 font-semibold text-xl lg:text-2xl">
          Все мероприятия
        </h2>
        <div className="flex flex-wrap gap-6">
          {events?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </main>
  );
}
