import { useMemo } from 'react';

const useSortButtons = () => {
  const buttons = useMemo(
    () => [
      {
        label: 'Все',
        serverLabel: 'ALL'
      },
      {
        label: 'Сегодня',
        serverLabel: 'TODAY'
      },
      {
        label: 'Завтра',
        serverLabel: 'TOMORROW'
      },
      {
        label: 'На этой неделе',
        serverLabel: 'THIS_WEEK'
      },
      {
        label: 'Ближайшие выходные',
        serverLabel: 'NEXT_WEEKEND'
      },
      {
        label: 'На следующей неделе',
        serverLabel: 'NEXT_WEEK'
      },
      {
        label: 'В этом месяце',
        serverLabel: 'THIS_MONTH'
      },
    ],
    []
  );

  return buttons;
};

export default useSortButtons;
