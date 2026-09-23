import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { activitySchema, CATEGORY_OPTIONS, type ActivityFormData, type Category } from '../../../lib/schemas/activitySchema';
import CustomTextInput from '../../../lib/components/CustomTextInput';
import type { Activity } from '../../../lib/Types';

type Props = {
  activity?: Activity;
  closeForm: () => void;
  onSubmit: (data: ActivityFormData) => void;
  isSubmitting?: boolean;
};

export default function ActivityForm({ activity, closeForm, onSubmit, isSubmitting }: Props) {
  const isValidCategory = (cat?: string): cat is Category =>
    CATEGORY_OPTIONS.includes(cat as Category);

  const { control, handleSubmit, reset } = useForm<ActivityFormData>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      title: activity?.title ?? '',
      description: activity?.description ?? '',
      category: isValidCategory(activity?.category) ? activity.category : 'drinks',
      date: activity?.date ? activity.date.split('T')[0] : '',
      city: activity?.city ?? '',
      venue: activity?.venue ?? '',
    },
  });

  // Reactive synchronization: resets form whenever activity prop changes
  useEffect(() => {
    if (activity) {
      reset({
        title: activity.title,
        description: activity.description,
        category: isValidCategory(activity.category) ? activity.category : 'drinks',
        date: activity.date ? activity.date.split('T')[0] : '',
        city: activity.city,
        venue: activity.venue,
      });
    } else {
      reset({
        title: '',
        description: '',
        category: 'drinks',
        date: '',
        city: '',
        venue: '',
      });
    }
  }, [activity, reset]);

  return (
    <Paper sx={{ borderRadius: 3, p: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2.5 }}>
        {activity ? 'Edit activity' : 'Create activity'}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
      >
        <CustomTextInput name="title" control={control} label="Title" placeholder="Title" />

        <CustomTextInput
          name="description"
          control={control}
          label="Description"
          placeholder="Description"
          multiline
          rows={3}
        />

        <CustomTextInput
          select
          name="category"
          control={control}
          label="Category"
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </MenuItem>
          ))}
        </CustomTextInput>

        <CustomTextInput
          name="date"
          control={control}
          type="date"
          label="Date"
          slotProps={{ inputLabel: { shrink: true } }}
        />

        <CustomTextInput name="city" control={control} label="City" placeholder="City" />

        <CustomTextInput name="venue" control={control} label="Venue" placeholder="Venue" />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 1 }}>
          <Button onClick={closeForm} color="inherit" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            color="success" 
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
