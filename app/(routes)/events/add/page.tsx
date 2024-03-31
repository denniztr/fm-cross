import AddEventForm from '@/components/event/AddEventForm';

export default function Home() {
  return (
    <main className="pt-16">
      <section className="flex gap-4">
        <div className="w-9/12 p-6 rounded-xl border bg-card text-card-foreground shadow">
          <div className="space-y-5 pb-5">
            <h1 className="font-semibold text-2xl">
              Опубликуйте своё мероприятие
            </h1>
            <h3 className="font-semibold">Шаг 1</h3>
          </div>
          <div>
            <AddEventForm />
          </div>
        </div>
        <div className="p-6 w-1/3 rounded-xl bg-testBgColor">
          <h3 className="font-semibold">Для разработки:</h3>
          <ul className="pt-2">
            <h2 className="font-semibold">Какие нужны данные:</h2>
            <li>Заголовок мероприятия</li>
            <li>Полное описание</li>
            <li>Локация</li>
            <li>Начало мероприятия</li>
            <li>Теги?</li>
            <li>Медиа</li>
            <li>Категория</li>
            <li>
              Добавить в бд возможность выбрать тип мероприятия (онлайн или
              оффлайн)
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
