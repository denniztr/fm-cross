import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthContext from './context/AuthContext';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>{children}<Toaster /></AuthContext>
      </body>
    </html>
  );
}
