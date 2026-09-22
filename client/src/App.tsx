import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Activity } from './lib/Types'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7223/api/activities')
      .then((response) => setActivities(response.data))
  }, [])

  return (
    <>
      <Typography variant="h3" className="app" style={{ color: 'red' }}>
        Reactivities
      </Typography>
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
