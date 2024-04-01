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
import { Label } from '../ui/label';
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
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Выберите вид мероприятия</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                        <Input {...field} type="time" />
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
      {/* <form className="">
          <Input className="w-full pb-" placeholder="Название мероприятия" />
          <div>
            Выберите вид мероприятия
            <RadioGroup defaultValue="comfortable" className="flex gap-10">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="offlineEvent" id="r1" />
                <Label htmlFor="r1">Оффлайн мероприятие</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="onlineEvent" id="r2" />
                <Label htmlFor="r2">Онлайн мероприятие</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h3>Время начала мероприятия</h3>
            <div className="flex space-x-2">
              <Input type="date" className="w-36" />
              <Input type="time" className="w-24" />
            </div>
          </div>
          <div>
            <h3>Описание мероприятия</h3>
            <Textarea placeholder="Опишите подробно мероприятие" />
          </div>
          <div>
            <h3>Выберите фотографию</h3>
            <Input type="file" />
          </div>
          <Button type="submit" variant="outline">
            Опубликовать
          </Button>
        </form> */}
    </div>
  );
};

export default AddEventForm;
