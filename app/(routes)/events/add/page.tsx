import AddEventForm from '@/components/event/AddEventForm';
import Tips from '@/components/Tips';

export default async function Home() {
  return (
    <main className="pt-16">
      <section className="flex gap-4">
        <div className="w-9/12 p-6 rounded-xl border bg-card text-card-foreground shadow">
          <div className="space-y-5 pb-5">
            <h1 className="font-semibold text-2xl">
              Опубликуйте своё мероприятие
            </h1>
          </div>
          <div>
            <AddEventForm />
          </div>
        </div>
        <div className="p-6 w-1/3 rounded-xl bg-testBgColor">
          <h3 className="font-semibold">Советы:</h3>
          <Tips />
        </div>
      </section>
    </main>
  );
}
