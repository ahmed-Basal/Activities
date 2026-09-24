import { type FormEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useParams, useNavigate } from 'react-router';
import useactivites from '../../../lib/Hooks/useactivites';
import type { Activity } from '../../../lib/Types';
import { CATEGORY_OPTIONS } from '../../../lib/schemas/activitySchema';

export default function ActivityForm() {
  const { id } = useParams<{ id: string }>();
  const { updateActivity, createActivity, activity, isLoadingActivity } = useactivites(id);
  const navigate = useNavigate();

  const isSubmitting = updateActivity.isPending || createActivity.isPending;
  const closeForm = () => navigate('/activities');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      closeForm();
    } else {
      createActivity.mutate(data as unknown as Activity,{
          onSuccess: (id) => {
            navigate(`/activities/${id}`);
          }
          
      });
    }
  };

  if (isLoadingActivity) return <Typography variant="h5">Loading...</Typography>;
  return (
    <Paper sx={{ borderRadius: 3, p: 3, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2.5 }}>
        {activity ? 'Edit activity' : 'Create activity'}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
      >
        <TextField
          name="title"
          label="Title"
          placeholder="Title"
          defaultValue={activity?.title ?? ''}
          fullWidth
        />

        <TextField
          name="description"
          label="Description"
          placeholder="Description"
          defaultValue={activity?.description ?? ''}
          multiline
          rows={3}
          fullWidth
        />

        <TextField
          select
          name="category"
          label="Category"
          defaultValue={activity?.category ?? 'drinks'}
          fullWidth
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          name="date"
          type="date"
          label="Date"
          slotProps={{ inputLabel: { shrink: true } }}
          defaultValue={activity?.date ? activity.date.split('T')[0] : ''}
          fullWidth
        />

        <TextField
          name="city"
          label="City"
          placeholder="City"
          defaultValue={activity?.city ?? ''}
          fullWidth
        />

        <TextField
          name="venue"
          label="Venue"
          placeholder="Venue"
          defaultValue={activity?.venue ?? ''}
          fullWidth
        />

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
