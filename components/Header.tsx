import { User } from '@prisma/client';

import LoginButton from './LoginButton';
import SheetLayout from './SheetLayout';

interface HeaderProps {
  currentUser: User;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="w-full border border-b-1 py-3 px-10">
      <div className="flex gap-4 items-center justify-end">
        <div>
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
