'use client';

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import axios from 'axios';

export default function Home() {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post('/api/test', data)
      .then((cb) => console.log(cb))
      .catch((error) => console.log(error, 'AXIOS ERROR'));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-red-300">Hello Todo App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="border border-black"
          {...register('title')}
        />
        <input
          id="content"
          type="text"
          placeholder="Content"
          className="border border-black"
          {...register('content')}
        />
        <Button variant="link" size="default" type="submit">
          Отправить
        </Button>
      </form>
    </main>
  );
}
