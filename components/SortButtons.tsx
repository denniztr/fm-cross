'use client';

import { useState, useCallback } from "react";


type variant = 'ALL' | 'TODAY' | 'TOMORROW' | 'THIS WEEK' | 'THIS WEEKEND' | 'NEXT WEEK' | 'THIS MONTH';

const SortButtons = () => {
  const [variant, setVariant] = useState('ALL')

  console.log(variant)

  return (
    <div className="w-full flex flex-row justify-between pb-2 text-gray-500">
      <button onClick={() => setVariant('ALL')}>Все</button>
      <button onClick={() => setVariant('TODAY')}>Сегодня</button>
      <button onClick={() => setVariant('TOMORROW')}>Завтра</button>
      <button onClick={() => setVariant('THIS WEEK')}>На этой неделе</button>
      <button onClick={() => setVariant('THIS WEEKEND')}>Ближайшие выходные</button>
      <button onClick={() => setVariant('NEXT WEEK')}>На следующей неделе</button>
      <button onClick={() => setVariant('THIS MONTH')}>В этом месяце</button>
    </div>
  );
};

export default SortButtons;
