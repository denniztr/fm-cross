import AddEventForm from '@/components/event/AddEventForm';
import Tips from '@/components/Tips';
import getAllEvents from '@/app/actions/getAllEvents';

export default async function Home() {
  const events = await getAllEvents();

  return (
    <main className="py-10">
      <section>
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow">
          <div className="space-y-5 pb-5">
            <h1 className="font-semibold text-2xl">
              Опубликуйте своё мероприятие
            </h1>
          </div>
          <div className="">
            <AddEventForm />
          </div>
        </div>
      </section>
    </main>
  );
}
