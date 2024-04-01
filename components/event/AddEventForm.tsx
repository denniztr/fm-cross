'use client';

import { useForm } from 'react-hook-form';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddEventSchema } from '@/schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const AddEventForm = () => {
  const form = useForm<z.infer<typeof AddEventSchema>>({
    resolver: zodResolver(AddEventSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
      startDate: '',
      startTime: '',
      eventType: '',
      category: '',
      media: '',
    },
  });

  const onSubmit = (values: z.infer<typeof AddEventSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <h3>Название мероприятия</h3>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Название мероприятия"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <h3>Выберите категорию</h3>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Категория" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem className="">
                    <h3>Вид мероприятия</h3>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center"
                      >
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="offline" />
                          </FormControl>
                          <FormLabel>Оффлайн мероприятие</FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="online" />
                          </FormControl>
                          <FormLabel>Онлайн мероприятие</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <h3>Время начала мероприятия</h3>
              <div className="flex space-x-2">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="date" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div></div>
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="time"/>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <h3>Место проведения</h3>
                  <FormControl>
                    <Input {...field} placeholder="Локация" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <h3>Описание мероприятия</h3>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Опишите подробно мероприятие"
                      className="min-h-64"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="media"
              render={({ field }) => (
                <FormItem>
                  <h3>Добавьте фотографию</h3>
                  <FormControl>
                    <Input {...field} type="file" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant="outline">
            Опубликовать
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEventForm;
