import getEventById from '@/app/actions/getEventById';

import ImageComp from '@/components/Image';

export default async function Home({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEventById(id);

  return (
    <main className="pt-6">
      <section className="flex flex-col gap-4">
        <div className="p-4 rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex gap-4">
            <ImageComp className="relative h-32 w-32" />
            <div>
              <h1 className="font-semibold text-2xl">{event?.title}</h1>
              <p>
                в этом блоке: заголовок, дата, картинка, добавить в избранное?,
                кнопка принять участие. fixed при скролле вниз, тип мероприятия
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-9/12 p-4 rounded-xl border bg-card text-card-foreground shadow space-y-3">
            <p>
              Фотография, описание, фотографии с прошлых мероприятий?, категория
            </p>
            <p>{event?.description}</p>
          </div>
          <div className="w-1/3 p-4 rounded-xl border bg-card text-card-foreground shadow">
            организатор, дата и время, адрес
          </div>
        </div>
      </section>
      {/* <div className="space-y-2">
        <p>{event?.title}</p>
        <p>{event?.description}</p>
        <p>{event?.startDate}</p>
        <p>{event?.startTime}</p>
        <p>{event?.location}</p>
        <p>{event?.category}</p>
        <p>{event?.eventType}</p>
        <p>{event?.author?.name}</p>
        <p>{event?.author?.surname}</p>
      </div> */}
    </main>
  );
}
