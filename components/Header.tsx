import Link from 'next/link';

import { User } from '@prisma/client';

import LoginButton from './LoginButton';
import SheetLayout from './SheetLayout';
import CreateEventButton from './CreateEventButton';
import SearchInput from './SearchInput';


interface HeaderProps {
  currentUser: User;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="w-full h-12 flex justify-center items-center">
      <div className="min-w-[1200px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="text-testColor text-2xl font-bold cursor-pointer">
              МестоВстречи
            </h1>
          </Link>
          <div className="h-7">
            <SearchInput />
          </div>
        </div>
        <div className="space-x-4">
          <CreateEventButton href={currentUser ? '/events/add' : '/signup'}/>
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
