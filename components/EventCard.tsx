import { User } from '@prisma/client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

import { format, parseISO } from 'date-fns';
import ru from 'date-fns/locale/ru';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  startTime: string;
  category: string;
  author: User;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  location,
  startDate,
  startTime,
  category,
  author,
}) => {
  const formattedDate = format(parseISO(startDate), 'dd MMMM yyyy', {
    locale: ru,
  });


  return (
    <div className="min-w-[300px]">
      <Card className="w-full transition duration-200 hover:shadow-lg">
        <CardContent className="px-0">
          <div className="w-full h-64 relative inline-block overflow-hidden rounded-t-xl">
            <Image src="/testPictureEnglishClub.jpg" fill alt="cardImage" />
          </div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{location}</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="w-48">{formattedDate}</div>
            <div>
              <Link href={`/events/${id}`} className="w-full">
                <Button className="font-normal" variant="default">
                  Подробнее
                </Button>
              </Link>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;
