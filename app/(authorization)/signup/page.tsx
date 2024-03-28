'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

import axios from 'axios';

const SignUpPage = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    startTransition(() => {
      axios
        .post('/api/register', data)
        .then((cb) => {
          if (cb.status === 200) {
            router.push('/signin');
            toast({
              title: 'Успешная регистрация',
              description: 'Вы успешно зарегистрировались',
            });
          }
        })
        .catch((error) => {
          console.log('ошибка', error);
          toast({
            title: 'Что-то пошло не так!',
            description: 'Возможно такая электронная почта уже занята',
            variant: 'destructive',
          });
        });
    });
  };

  return (
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
                      disabled={isPending}
                      placeholder="example@gmail.com"
                      type="email"
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
                      disabled={isPending}
                      type="password"
                      placeholder="******"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Денис"
                      type="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Фамилия</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Иванов"
                      type="surname"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-center">
                    Ваше имя и фамилию увидят другие пользователи
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            variant="outline"
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            Создать аккаунт
          </Button>
        </form>
      </Form>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-xs font-gray-500">Уже есть аккаунт?</p>
        <Link href="/signin">
          <Button variant="link" size="sm">
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
