'use client';

import { useState } from 'react';

import useSortButtons from '@/app/_hooks/useSortButtons';

import clsx from 'clsx';


const SortButtons = () => {
  const sortButtons = useSortButtons();

  const [isActive, setIsActive] = useState('ALL');
  const [date, setDate] = useState('');

  const toggleVariant = (serverLabel: string) => {
    setIsActive(serverLabel)
    console.log(serverLabel);
  };


  return (
    <div className="min-w-[820px] overflow-auto flex flex-row justify-between pb-2 text-gray-500">
      {sortButtons.map((button) => (
        <button
          className={clsx(
            `text-gray-500 transition duration-500  hover:text-gray-800`,
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
