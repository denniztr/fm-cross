'use client';

import Link from 'next/link';
import { Button } from './ui/button';

interface LoginButtonProps {
  href: string
  children: React.ReactNode
}

const LoginButton: React.FC<LoginButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      
    >
      <Button>{children}</Button>
    </Link>
  );
};

export default LoginButton;
