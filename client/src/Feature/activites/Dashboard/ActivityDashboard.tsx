import Grid2 from '@mui/material/Grid';
import type { Activity } from "../../../lib/Types";
import ActivityList from './ActivityList';
import ActivityDetails from '../Details/ActivityDetails';

type Props = {
    activities: Activity[]
}

export default function ActivityDashboard(props: Props) {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={7}>
                <ActivityList activities={props.activities} />
            </Grid2>
            <Grid2 size={5}>
                <ActivityDetails activity={props.activities[0]} />
            </Grid2>
        </Grid2>
    )
}
