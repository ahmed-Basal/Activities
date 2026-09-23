import { z } from 'zod';

export const CATEGORY_OPTIONS = ['drinks', 'culture', 'music', 'travel', 'film'] as const;
export type Category = (typeof CATEGORY_OPTIONS)[number];

export const activitySchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  category: z.enum(CATEGORY_OPTIONS, {
    message: 'Category must be one of: drinks, culture, music, travel, film',
  }),
  date: z.string().min(1, { message: 'Date is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  venue: z.string().min(1, { message: 'Venue is required' }),
});

export type ActivityFormData = z.infer<typeof activitySchema>;
