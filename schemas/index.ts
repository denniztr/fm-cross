'use client';

import * as z from 'zod';

export const FormSchema = z.object({
  email: z.string().email({
    message: 'Введите электронную почту'
  }),
  name: z.string(),
  surname: z.string(),
  password: z.string().min(5, {
    message: 'Пароль должен содержать минимум 5 символов'
  }),
});
