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
    <header className="w-full h-12 flex justify-center items-center px-16">
      <div className="min-w-[1200px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="">Логотип</h1>
          <div className="h-7">
            <SearchInput />
          </div>
        </div>
        <div className="space-x-4">
          <CreateEventButton />
          {currentUser ? (
            <SheetLayout currentUser={currentUser} />
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
