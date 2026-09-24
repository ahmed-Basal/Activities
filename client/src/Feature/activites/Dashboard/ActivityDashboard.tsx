import Grid2 from '@mui/material/Grid';
import ActivityList from './ActivityList';
export default function ActivityDashboard() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={7}>
                <ActivityList/>                   
            </Grid2>
            <Grid2 size={5}>
              Activity Filters  go there
            </Grid2>
        </Grid2>
    );
}
