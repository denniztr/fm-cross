import { useMemo } from 'react';

const useCategoryRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: 'Бизнес',
        image: '/business.jpg',
        href: '/events',
      },
      {
        label: 'Музыка',
        image: '/music.jpg',
        href: '/events'
      },
      {
        label: 'Вечеринки',
        image: '/parties.jpg',
        href: '/events'
      },
      {
        label: 'Фитнесс',
        image: '/healthFitness.jpg',
        href: '/events'
      },
      {
        label: 'Воркшопы',
        image: '/workshop.jpg',
        href: '/events'
      },
      {
        label: 'Искусство',
        image: '/art.jpg',
        href: '/events'
      },
      {
        label: 'Путешествия',
        image: '/travel.jpg',
        href: '/events'
      },
      {
        label: 'Дети',
        image: '/kids.jpg',
        href: '/events'
      },
    ],
    []
  );

  return routes;
};

export default useCategoryRoutes;
