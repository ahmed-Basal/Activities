import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Activity } from '../../lib/Types'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../Feature/activites/Dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7223/api/activities')
      .then((response) => setActivities(response.data))
  }, [])

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  )
}

export default App
