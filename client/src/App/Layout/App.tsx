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
  const { activities, isPending } = useactivites()
 

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities?.find(activity => activity.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenForm = () => {
    setEditMode(true)
  }

  const handleCloseForm = () => {
    setEditMode(false)
  }

  const handleSubmitForm = (activity: ActivityFormData) => {
    console.log('activity form data', activity);
    setEditMode(false);
  }

  const handleDeleteActivity = (id: string) => {
    console.log('delete activity',id);
  }

  return (
    <>
      <Box sx={{backgroundColor:'#eeeeee',height:'100vh'}}> 


      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
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
      />
      ) 
        }
        </Container>
      </Box>
    </>
  )
}

export default App
