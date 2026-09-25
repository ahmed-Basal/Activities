import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import PlaceIcon from '@mui/icons-material/Place';
import Divider from '@mui/material/Divider';
import Grid2 from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { formatDate } from '../../../lib/UTlity/Utle';
import type { Activity } from '../../../lib/Types';
type Props = {
    activity: Activity;
};

export default function ActivityDetailsInfo({activity}: Props) {
    return (
        <Paper sx={{ mb: 2 }}>

            <Grid2 container sx={{ alignItems: "center", pl: 2, py: 1 }}>
                <Grid2 size={1}>
                    <InfoIcon color="info" fontSize="large" />
                </Grid2>
                <Grid2 size={11}>
                    <Typography>{activity?.description}</Typography>
                </Grid2>
            </Grid2>
            <Divider />
            <Grid2 container sx={{ alignItems: "center", pl: 2, py: 1 }}>
                <Grid2 size={1}>
                    <CalendarTodayIcon color="info" fontSize="large" />
                </Grid2>
                <Grid2 size={11}>
                    <Typography>{formatDate(activity?.date)}</Typography>
                </Grid2>
            </Grid2>
            <Divider />

            <Grid2 container sx={{ alignItems: "center", pl: 2, py: 1 }}>
                <Grid2 size={1}>
                    <PlaceIcon color="info" fontSize="large" />
                </Grid2>
                <Grid2 size={11}>
                    <Typography>
                       {activity?.venue}, {activity?.city}
                    </Typography>
                </Grid2>
            </Grid2>
        </Paper>
    )
}


