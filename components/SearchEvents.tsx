'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchEvents = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState(null)

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    
    if (searchQuery) {
      params.set('query', searchQuery)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`);
  }


  return (
      <div className="w-full flex gap-2">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input
          placeholder="Поиск мероприятия"
          className="bg-white/90"
          onChange={(e) => setSearchQuery(e.target.value)}
          // onChange={(event) => handleSearch(event.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <Button className="bg-white text-black hover:bg-white" onClick={() => handleSearch()}>Поиск</Button>
      </div>
  );
};

export default SearchEvents;
