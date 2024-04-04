'use client';

import { usePathname } from 'next/navigation';

import { Input } from './ui/input';

const SearchInput = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/events' && (
        <Input className="h-full" placeholder="Поиск мероприятия" />
      )}
    </>
  );
};

export default SearchInput;
