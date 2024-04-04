'use client';

import { usePathname } from 'next/navigation';

import { Input } from './ui/input';

interface SearchInputProps {
  className: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className: styles }) => {
  const pathname = usePathname();
  
  return (
    <>
      {pathname !== '/events' && (
        <Input className={styles} placeholder="Поиск мероприятия" />
      )}
    </>
  );
};

export default SearchInput;
