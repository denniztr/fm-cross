import Link from 'next/link';

import { User } from '@prisma/client';

import LoginButton from './LoginButton';
import SheetLayout from './SheetLayout';
import CreateEventButton from './CreateEventButton';
import SearchInput from './SearchInput';

interface HeaderProps {
  currentUser: User;
  className: string;
}

const Header: React.FC<HeaderProps> = ({ currentUser, className }) => {
  return (
    <header className="w-full py-3 px-8 2xl:px-36">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">МестоВстречи</h1>
          </Link>
          <div className="hidden lg:block">
            <SearchInput className={className} />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <CreateEventButton href={currentUser ? '/events/add' : '/signup'} />
          {currentUser ? (
            <SheetLayout currentUser={currentUser} />
          ) : (
            <LoginButton href="/signin">Войти</LoginButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
