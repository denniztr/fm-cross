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
import React from 'react';


interface EventCardProps {
  id: string,
  title: string,
  description: string,
  location: string,
  startDate: string,
  startTime: string,
  category: string,
  author: User
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
  return (
    <Card className="w-[300px] transition duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="max-h-16 overflow-hidden text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64 relative">
          <Image
            src="/art.jpg"
            fill
            alt="cardImage"
            className="object-center"
          />
        </div>
        <div className=" text-gray-600 text-sm pt-3 space-y-3">
          <div className="flex justify-between">
            <p>
              Участники: <span>0</span>
            </p>
            <p>Бесплатно</p>
          </div>
          <div className="space-y-4 font-semibold">
            <p>
              Организатор:{' '}
              <span className="ml-1 font-normal cursor-pointer underline-offset-4 hover:underline">
                {author?.name} {author?.surname}
              </span>
            </p>
            <p>
              Начало:{' '}
              <span className="font-normal">
                {startDate}, {startTime}
              </span>
            </p>
            <p>
              Место проведения: <span className="font-normal">{location}</span>
            </p>
            <p>
              Категория: <span className="font-normal">{category}</span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/events/${id}`} className="w-full">
          <Button
            className="w-full font-normal bg-testColor hover:bg-hoverTestColor"
            variant="default"
          >
            Принять участие
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
