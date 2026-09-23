import { Box, Button, MenuItem, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { activitySchema, CATEGORY_OPTIONS, type ActivityFormData, type Category } from '../../../lib/schemas/activitySchema';
import CustomTextInput from '../../../lib/components/CustomTextInput';
import type { Activity } from '../../../lib/Types';

type Props = {
  activity?: Activity;
  onSubmit: (data: ActivityFormData) => void;
  closeForm: () => void;
};

export default function ActivityForm({ activity, onSubmit, closeForm }: Props) {
  // Check if initial category is one of the valid enum options, otherwise default to 'drinks' or empty
  const isValidCategory = (cat?: string): cat is Category =>
    CATEGORY_OPTIONS.includes(cat as Category);

  const { control, handleSubmit } = useForm<ActivityFormData>({
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
          <Button onClick={closeForm} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
