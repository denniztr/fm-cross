'use client';

import { useState, useMemo, useCallback } from 'react';

import useSortButtons from '@/app/_hooks/useSortButtons';
import transformDate from '@/app/_utils/transformDate';

import clsx from 'clsx';


const SortButtons = () => {
  const sortButtons = useSortButtons();

  const [isActive, setIsActive] = useState('ALL');
  const [date, setDate] = useState();
  
  
  const toggleVariant = (serverLabel: any) => {
    setIsActive(serverLabel);

    const getActualDate = transformDate(serverLabel);
    console.log(getActualDate)
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
