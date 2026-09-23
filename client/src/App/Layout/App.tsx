import { useState } from 'react'
import type { Activity } from '../../lib/Types'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../Feature/activites/Dashboard/ActivityDashboard';
import type { ActivityFormData } from '../../lib/schemas/activitySchema';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useactivites from '../../lib/Hooks/useactivites';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const { activities, isPending, deleteActivity, createActivity, updateActivity } = useactivites()

  // 1. Viewing an activity: closes form and shows ActivityDetails
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities?.find(activity => activity.id === id))
    setEditMode(false)
  }

  // 2. Cancelling view: deselects active activity
  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  // 3. Opening form: if id is provided -> Edit mode; if no id -> Create mode (clears selection)
  const handleOpenForm = (id?: string) => {
    if (id) {
      setSelectedActivity(activities?.find(activity => activity.id === id));
    } else {
      setSelectedActivity(undefined);
    }
    setEditMode(true);
  }

  // 4. Closing form: exits edit mode
  const handleCloseForm = () => {
    setEditMode(false)
  }

  // 5. Submitting form: creates or updates activity and keeps details view updated
  const handleSubmitForm = (data: ActivityFormData) => {
    if (selectedActivity) {
      const updatedActivity: Activity = {
        ...selectedActivity,
        ...data,
      };
      updateActivity.mutate(updatedActivity, {
        onSuccess: () => {
          setSelectedActivity(updatedActivity);
          setEditMode(false);
        }
      });
    } else {
      const newActivity: Activity = {
        ...data,
        id: crypto.randomUUID(),
        latitude: 0,
        longitude: 0,
      };
      createActivity.mutate(newActivity, {
        onSuccess: () => {
          setSelectedActivity(newActivity);
          setEditMode(false);
        }
      });
    }
  }

  const handleDeleteActivity = (id: string) => {
    deleteActivity.mutate(id, {
      onSuccess: () => {
        if (selectedActivity?.id === id) {
          setSelectedActivity(undefined)
        }
      }
    })
  }

  return (
    <>
      <Box sx={{ backgroundColor: '#eeeeee', minHeight: '100vh', pb: 4 }}>
        <CssBaseline />
        <NavBar openForm={() => handleOpenForm()} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          {isPending || !activities ? (
            <Typography>Loading Activities...</Typography>
          ) : (
            <ActivityDashboard
              activities={activities}
              selectedActivity={selectedActivity}
              selectActivity={handleSelectActivity}
              cancelSelectActivity={handleCancelSelectActivity}
              editMode={editMode}
              openForm={handleOpenForm}
              closeForm={handleCloseForm}
              submitForm={handleSubmitForm}
              deleteActivity={handleDeleteActivity}
              deletePending={deleteActivity.isPending}
              targetId={deleteActivity.variables}
              isSubmitting={createActivity.isPending || updateActivity.isPending}
            />
          )}
        </Container>
      </Box>
    </>
  )
}

export default App
