import getEventById from '@/app/actions/getEventById';

import ImageComp from '@/components/Image';
import { Button } from '@/components/ui/button';

export default async function Home({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEventById(id);

  return (
    <main className="pt-6">
      <section className="flex flex-col gap-4">
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex gap-4">
            <ImageComp
              className="relative h-28 w-32"
              imageStyles="object-cover"
            />
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-semibold text-2xl">{event?.title}</h1>
                <div className="space-x-2">
                  <Button
                    variant="link"
                    className="text-sm text-gray-600 p-0 font-normal"
                  >
                    Добавить в избранное
                  </Button>
                  <Button
                    variant="link"
                    className="text-sm text-gray-600 p-0 font-normal"
                  >
                    Поделиться
                  </Button>
                </div>
                <div className="flex space-x-2 text-sm text-gray-600">
                  <p>{event?.startDate}</p>
                  <p>{event?.startTime}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="space-y-2">
                  <Button>Присоединиться</Button>
                  <p className="text-gray-500 text-xs">
                    мероприятие бесплатное
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-9/12 p-6 rounded-xl border bg-card text-card-foreground shadow space-y-3">
            <div className="bg-black/5">
              <ImageComp
                className="relative w-full h-[450px]"
                imageStyles="object-contain"
              />
            </div>
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
