import Typography from '@mui/material/Typography';
import useactivites from '../../../lib/Hooks/useactivites';
import { useParams } from 'react-router';
import Grid2 from '@mui/material/Grid';
import ActivityDetailsChats from './ActivityDetailscahts';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsSideBar from './ActivityDetailsSideBar';
import ActivityDetailsheader from './ActivityDetailsHeaders';
export default function ActivityDetails() {
    

   const{id}=useParams();
   const {activity, isLoadingActivity}=useactivites(id);

    if (isLoadingActivity) return <Typography variant="h5">Loading...</Typography>;
    if (!activity) return <Typography variant="h5">Activity not found</Typography>;
    return (
      <Grid2 container spacing={3}>
       <Grid2 size={{ xs: 12, md: 8 }}>
           <ActivityDetailsheader activity={activity}/>
           <ActivityDetailsInfo activity={activity}/>
           <ActivityDetailsChats/>
       </Grid2>

       <Grid2 size={{ xs: 12, md: 4 }}>
         <ActivityDetailsSideBar/>
       </Grid2>
      </Grid2>
    );
}