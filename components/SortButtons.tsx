'use client';

import { useState, useCallback } from 'react';

import clsx from 'clsx';

type variant =
  | 'ALL'
  | 'TODAY'
  | 'TOMORROW'
  | 'THIS WEEK'
  | 'THIS WEEKEND'
  | 'NEXT WEEK'
  | 'THIS MONTH';

const SortButtons = () => {
  const [variant, setVariant] = useState('ALL');

  return (
    <div className="min-w-[820px] overflow-auto flex flex-row justify-between pb-2 text-gray-500">
      <button
        className={clsx(``, variant === 'ALL' && 'text-black')}
        onClick={() => setVariant('ALL')}
      >
        Все
      </button>
      <button
        className={clsx(``, variant === 'TODAY' && 'text-black')}
        onClick={() => setVariant('TODAY')}
      >
        Сегодня
      </button>
      <button
        className={clsx(``, variant === 'TOMORROW' && 'text-black')}
        onClick={() => setVariant('TOMORROW')}
      >
        Завтра
      </button>
      <button
        className={clsx(``, variant === 'THIS WEEK' && 'text-black')}
        onClick={() => setVariant('THIS WEEK')}
      >
        На этой неделе
      </button>
      <button
        className={clsx(``, variant === 'THIS WEEKEND' && 'text-black')}
        onClick={() => setVariant('THIS WEEKEND')}
      >
        Ближайшие выходные
      </button>
      <button
        className={clsx(``, variant === 'NEXT WEEK' && 'text-black')}
        onClick={() => setVariant('NEXT WEEK')}
      >
        На следующей неделе
      </button>
      <button
        className={clsx(``, variant === 'THIS MONTH' && 'text-black')}
        onClick={() => setVariant('THIS MONTH')}
      >
        В этом месяце
      </button>
    </div>
  );
};

export default SortButtons;
