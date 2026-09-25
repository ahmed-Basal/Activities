import Grid2 from '@mui/material/Grid';
import ActivityList from './ActivityList';
import ActivityFilters from './activityFilter';
export default function ActivityDashboard() {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 8 }}>
                <ActivityList/>                   
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <ActivityFilters/>
            </Grid2>
        </Grid2>
    );
}
