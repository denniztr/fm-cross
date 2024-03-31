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

const EventCard = () => {
  return (
    <Card className="w-[300px] transition duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Йога в финском парке</CardTitle>
        <CardDescription className="max-h-16 overflow-hidden">
          Групповое йога мероприятие - это событие, где участники собираются
          вместе для занятий йогой в группе под руководством опытного
          инструктора. В течение мероприятия участники выполняют различные асаны
          (позы), дыхательные упражнения и медитации, нацеленные на улучшение
          физического здоровья, снятие стресса и достижение гармонии тела и
          разума. Групповые йога мероприятия обычно проводятся в дружественной и
          поддерживающей атмосфере, способствуя взаимной поддержке и
          сотрудничеству среди участников.
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
          <div>
            <p>
              Организатор:{' '}
              <span className="ml-1 cursor-pointer underline-offset-4 hover:underline">
                Василий Скунгс
              </span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/events" className="w-full">
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
