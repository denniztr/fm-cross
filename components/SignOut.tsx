'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const SignOut = () => {
  return (
    <Button
      className="w-full"
      variant="outline"
      onClick={() => signOut()}
    >
      Выйти из профиля
    </Button>
  );
};

export default SignOut;
