import { useMemo } from 'react';

const useCategoryRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: 'Бизнес',
        image: '/business.jpg',
        href: '/business',
      },
      {
        label: 'Музыка',
        image: '/music.jpg',
        href: '/music'
      },
      {
        label: 'Вечеринки',
        image: '/parties.jpg',
        href: '/parties'
      },
      {
        label: 'Фитнесс',
        image: '/healthFitness.jpg',
        href: '/fitness'
      },
      {
        label: 'Воркшопы',
        image: '/workshop.jpg',
        href: '/workshop'
      },
      {
        label: 'Искусство',
        image: '/art.jpg',
        href: '/art'
      },
      {
        label: 'Путешествия',
        image: '/travel.jpg',
        href: '/travel'
      },
      {
        label: 'Дети',
        image: '/kids.jpg',
        href: '/kids'
      },
    ],
    []
  );

  return routes;
};

export default useCategoryRoutes;
