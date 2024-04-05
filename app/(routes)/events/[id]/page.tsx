import getEventById from '@/app/actions/getEventById';
import getCurrentUser from '@/app/actions/getCurrentUser';

import ImageComp from '@/components/Image';
import { Button } from '@/components/ui/button';

export default async function Home({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEventById(id);
  const currentUser = await getCurrentUser();

  return (
    <main className="container py-10">
      <section className="flex flex-col gap-4">
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex gap-4">
            <ImageComp
              className="relative h-28 w-32 inline-block overflow-hidden"
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
              />
            </div>
            <div className="leading-7">
              <div className="py-5 flex items-center space-x-3">
                <h3 className="font-semibold text-xl">О мероприятии</h3>
                {currentUser?.id === event?.author.id && (
                  <p className="text-sm underline-offset-4 cursor-pointer hover:underline inline">
                    редактировать
                  </p>
                )}
              </div>
              <div>
                <p>{event?.description}</p>
              </div>
            </div>
            <div>
              <h3 className="py-5 font-semibold text-xl">
                Фотографии с предыдущих мероприятий
              </h3>
              <div>здесь фотографии</div>
            </div>
          </div>
          <div className="w-1/3 h-auto space-y-4">
            <div className="p-4 rounded-xl border bg-card text-card-foreground shadow space-y-6">
              <div className="space-y-1">
                <h5 className="font-semibold">Время и дата</h5>
                <div>
                  <p className="text-sm text-gray-500">
                    {event?.startDate} {event?.startTime}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Локация</h5>
                <div>
                  <p className="text-sm text-gray-500">{event?.location}</p>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Категория</h5>
                <div>
                  <p className="text-sm text-gray-500">{event?.category}</p>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Поделиться ссылкой</h5>
                <div>
                  <p>ссылка</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl border bg-card text-card-foreground shadow">
              <h5 className="font-semibold">Организатор</h5>
              <p className="text-sm text-gray-500">
                {event?.author?.name} {event?.author?.surname}
              </p>
            </div>
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
