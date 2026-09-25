import Grid2 from '@mui/material/Grid';
import ActivityList from './ActivityList';
import ActivityFilters from './activityFilter';
export default function ActivityDashboard() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={8}>
                <ActivityList/>                   
            </Grid2>
            <Grid2 size={4}>
              <ActivityFilters/>
            </Grid2>
        </Grid2>
    );
}
