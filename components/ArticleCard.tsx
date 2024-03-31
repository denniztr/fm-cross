import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ArticleCard = () => {
  return (
    <Card className="w-1/3 border-none shadow-none">
      <CardContent className="space-y-4">
        <div className="h-64 w-full relative inline-block overflow-hidden">
          <Image
            src="/fr2.jpg"
            fill
            alt="testPicture"
            className="object-contain"
          />
        </div>
        <CardTitle className="">
          Как случайные знакомства перерастают в настоящую дружбу
        </CardTitle>
        <CardDescription>
          Уже доказано, чем старше мы становимся, тем сложнее нам завести
          настоящих друзей. Не берите в голову: вот, что можно сделать, чтобы
          упростить процесс поиска людей.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href="/events"
          className="text-black text-sm underline-offset-4 hover:underline"
        >
          Подробнее
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
