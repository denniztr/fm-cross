'use client';

import * as z from 'zod';

export const SignUpSchema = z.object({
  email: z.string().email({
    message: 'Введите электронную почту'
  }),
  name: z.string().min(1, {
    message: 'Это поле обязятельное'
  }),
  surname: z.string().min(1, {
    message: 'Это поле обязательное'
  }),
  password: z.string().min(5, {
    message: 'Пароль должен содержать минимум 5 символов'
  }),
});

export const SignInSchema = z.object({
  email: z.string().min(1, {
    message: 'Заполните поле'
  }),
  password: z.string().min(1, {
    message: 'Заполните поле'
  }),
})
