'use client';

import * as z from 'zod';

export const SignUpSchema = z.object({
  email: z.string().email({
    message: 'Введите электронную почту',
  }),
  name: z.string().min(1, {
    message: 'Это поле обязятельное',
  }),
  surname: z.string().min(1, {
    message: 'Это поле обязательное',
  }),
  password: z.string().min(5, {
    message: 'Пароль должен содержать минимум 5 символов',
  }),
});

export const SignInSchema = z.object({
  email: z.string().min(1, {
    message: 'Заполните поле',
  }),
  password: z.string().min(1, {
    message: 'Заполните поле',
  }),
});

export const AddEventSchema = z.object({
  title: z.string().min(5, {
    message: 'Поле должно содержать минимум 5 символов',
  }),
  description: z.string().min(10, {
    message: 'Поле должно содержать минимум 10 символов',
  }),
  location: z.string().min(1, {
    message: 'Заполните поле'
  }),
  startDate: z.string().min(1, {
    message: 'Заполните поле'
  }),
  startTime: z.string().min(1, {
    message: 'Заполните поле'
  }),
  category: z.string().min(1, {
    message: 'Заполните поле'
  }),
  eventType: z.string().min(1, {
    message: 'Заполните поле'
  }),
  // media: z.string()
});
