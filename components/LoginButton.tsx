'use client';

import Link from 'next/link';
import { Button } from './ui/button';

const LoginButton = () => {
  return (
    <Link href="/signin">
      <Button variant='link'>Войти</Button>
    </Link>
  );
};

export default LoginButton;
