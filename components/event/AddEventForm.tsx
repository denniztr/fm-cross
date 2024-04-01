'use client';

import { useForm } from 'react-hook-form';
import useGetCategoryRoutes from '@/app/_hooks/useCategoryRoutes'

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

import axios from 'axios';

const AddEventForm = () => {
  const { toast } = useToast();
  const category = useGetCategoryRoutes();

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
    },
  });

  const onSubmit = (data: z.infer<typeof AddEventSchema>) => {
    // console.log(data);
    axios
      .post('/api/event', data)
      .then((cb) => {
        if (cb.status !== 201) {
          toast({
            title: 'Ошибка!',
            description: 'Что-то пошло не так!',
          });
        }

        if (cb.status === 201) {
          toast({
            title: 'Поздравляем!',
            description: 'Вы опубликовали новое мероприятие!',
          });
        }
      })
      .catch(() => {
        toast({
          title: 'Ошибка',
          description: 'Что-то пошло не так!',
          variant: 'destructive',
        });
      });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <h3 className="font-semibold">Название мероприятия</h3>
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
                  <h3 className="font-semibold">Выберите категорию</h3>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Категория" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {category.map((item) => (
                        <SelectItem key={item.label} value={item.label}>{item.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="eventType"
                render={({ field }) => (
                  <FormItem className="">
                    <h3 className="font-semibold">Вид мероприятия</h3>
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
                          <FormLabel className="font-normal ml-1">
                            Оффлайн мероприятие
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="online" />
                          </FormControl>
                          <FormLabel className="font-normal ml-1">
                            Онлайн мероприятие
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Время начала мероприятия</h3>
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
                  <h3 className="font-semibold">Место проведения</h3>
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
                  <h3 className="font-semibold">Описание мероприятия</h3>
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
