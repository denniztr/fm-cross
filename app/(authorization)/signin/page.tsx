'use client';

import { useTransition, useEffect } from 'react';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
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

const SignInPage = () => {
  const router = useRouter();
  const session = useSession();

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    startTransition(() => {
      signIn('credentials', { ...data, redirect: false }).then((cb) => {
        if (cb?.status === 200) {
          router.push('/');
        }
      });
    });
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
                        disabled={isPending}
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
                        disabled={isPending}
                        placeholder="******"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
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
