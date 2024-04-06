'use client';

import { useState } from 'react';

import useSortButtons from '@/app/_hooks/useSortButtons';

import clsx from 'clsx';

const SortButtons = () => {
  const sortButtons = useSortButtons();

  const [isActive, setIsActive] = useState('ALL');
  const [date, setDate] = useState();

  const toggleVariant = (serverLabel: any) => {
    setIsActive(serverLabel);

    if (serverLabel === 'TODAY') {
      const endDayTime = new Date();
      endDayTime.setHours(23, 59, 59, 59);

      console.log('------------------------------');
      console.log('Сегодняшние мероприятия до: ' + endDayTime);
      console.log('------------------------------');
    }

    if (serverLabel === 'TOMORROW') {
      const startDayTime = new Date();
      startDayTime.setDate(startDayTime.getDate() + 1);
      startDayTime.setHours(0, 0, 0, 0);
      console.log('Завтра начинается в: ' + startDayTime);

      const endDayTime = new Date();
      endDayTime.setDate(endDayTime.getDate() + 1);
      endDayTime.setHours(23, 59, 59, 59);
      console.log('Завтра заканчивается в: ' + endDayTime);
      console.log('------------------------------');
    }

    if (serverLabel === 'THIS_WEEK') {
      const today = new Date();
      const startOfWeek = new Date(today);
      const endOfWeek = new Date(today);

      const day = today.getDate();
      const monday = today.getDate() - day + (day === 0 ? -6 : 1);
      const sunday = today.getDate() + (7 - day);

      startOfWeek.setDate(monday);
      endOfWeek.setDate(sunday);

      startOfWeek.setHours(0, 0, 0, 0);
      endOfWeek.setHours(23, 59, 59, 59);

      console.log('Текущая неделя началась в: ' + startOfWeek);
      console.log('Текущая неделя закончится в: ' + endOfWeek);
      console.log('------------------------------');
    }

    if (serverLabel === 'NEXT_WEEKEND') {
      const today = new Date();
      const startOfWeekend = new Date(today);
      const endOfWeekend = new Date(today);

      const day = today.getDay();

      const saturday = today.getDate() - day + 6;
      const sunday = today.getDate() - day + 7;

      startOfWeekend.setDate(saturday);
      startOfWeekend.setHours(0, 0, 0, 0);

      endOfWeekend.setDate(sunday);
      endOfWeekend.setHours(23, 59, 59, 59);

      console.log('Выходные начинаются в : ' + startOfWeekend);
      console.log('Выходные закончатся в : ' + endOfWeekend);
      console.log('------------------------------');
    }

    if (serverLabel === 'NEXT_WEEK') {
      const today = new Date();
      const startOfWeek = new Date(today);
      const endOfWeek = new Date(today);

      const day = today.getDate();
      const nextMonday = today.getDate() - day + (day === 0 ? -6 : 1) + 7;
      const nextSunday = today.getDate() + (7 - day) + 7;

      startOfWeek.setDate(nextMonday);
      endOfWeek.setDate(nextSunday);

      startOfWeek.setHours(0, 0, 0, 0);
      endOfWeek.setHours(23, 59, 59, 59);

      console.log('Следующая неделя начнётся в: ' + startOfWeek);
      console.log('Следующая неделя закончится в: ' + endOfWeek);
      console.log('------------------------------');
    }

    if (serverLabel === 'THIS_MONTH') {
      const today = new Date();
      const startOfMonth = new Date(today);
      const endOfMonth = new Date(today);

      const day = today.getDay();
      const firstDay = today.getDate() - day + 1;

      const currentMonth = today.getMonth() + 1;


      startOfMonth.setDate(firstDay);
      startOfMonth.setHours(0, 0, 0, 0);


      console.log('Текущий месяц начался в: ' + startOfMonth);
      console.log('Последний день месяца: ' + endOfMonth);
      console.log('------------------------------');
    }
  };

  return (
    <div className="min-w-[820px] overflow-auto flex flex-row justify-between pb-2">
      {sortButtons.map((button) => (
        <button
          className={clsx(
            `text-gray-500 transition duration-500  hover:text-black`,
            button.serverLabel === isActive && 'text-black font-semibold'
          )}
          key={button.label}
          onClick={() => {
            toggleVariant(button.serverLabel);
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;
