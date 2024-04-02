import getEventById from '@/app/actions/getEventById';

export default async function Home({
  params: { id },
}: {
  params: { id: any };
}) {
  const event = await getEventById({ id });
  console.log(event);

  return (
    <div>
      <div className="space-y-2">
        <p>{event?.title}</p>
        <p>{event?.description}</p>
        <p>{event?.startDate}</p>
        <p>{event?.startTime}</p>
        <p>{event?.location}</p>
        <p>{event?.category}</p>
        <p>{event?.eventType}</p>
        <p>{event?.author?.name}</p>
        <p>{event?.author?.surname}</p>
      </div>
    </div>
  );
}
