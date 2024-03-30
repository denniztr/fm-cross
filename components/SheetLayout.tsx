'use client';

import { User } from '@prisma/client';

import SignOut from './SignOut';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface SheetLayoutProps {
  currentUser: User;
}

const SheetLayout: React.FC<SheetLayoutProps> = ({ currentUser }) => {
  return (
    <Sheet>
      <SheetTrigger className="text-sm underline-offset-4 transition duration-500 hover:underline">
        меню
      </SheetTrigger>
      <SheetContent side="right" className="md:w-[350px] w-1/2">
        <SheetHeader>
          <SheetTitle>
            {currentUser?.name} {currentUser?.surname}
          </SheetTitle>
          <SheetDescription>{currentUser?.email}</SheetDescription>
        </SheetHeader>
        {currentUser && <SignOut />}
      </SheetContent>
    </Sheet>
  );
};

export default SheetLayout;
