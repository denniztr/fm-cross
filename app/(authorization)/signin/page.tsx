'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from '@/schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SignInPage = () => {
  const router = useRouter();
  const session = useSession();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/');
    }
  }, [session, router]);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    setIsLoading(true);

    signIn('credentials', { ...data, redirect: true })
      .then((cb) => {
        if (cb?.error === 'Такой пользователь не существует') {
          toast({
            title: 'Ошибка',
            description: 'Пользователь с такой электронной почтой не найден',
            variant: 'destructive',
          });
        }

        if (cb?.error === 'Неверный пароль') {
          toast({
            title: 'Ошибка',
            description: 'Введён неверный пароль',
            variant: 'destructive',
          });
        }

        if (cb?.status === 200) {
          toast({
            title: 'Авторизация',
            description: 'Вы успешно вошли в свой аккаунт',
          });
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="w-[400px] p-12 space-y-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        disabled={isLoading}
                        placeholder="example@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        disabled={isLoading}
                        placeholder="******"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              Войти
            </Button>
          </form>
        </Form>
        <div className="flex gap-2 justify-center items-center">
          <p className="text-xs font-gray-500">Нет аккаунта?</p>
          <Link href="/signup">
            <Button variant="link" size="sm">
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
