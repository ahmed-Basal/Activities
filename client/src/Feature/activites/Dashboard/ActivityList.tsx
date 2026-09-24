import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ActivityCard from './ActivityCard';
import useactivites from '../../../lib/Hooks/useactivites';

export default function ActivityList() {
    const { activities, isPending } = useactivites();

    if (isPending || !activities) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(activity => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                />
            ))}
        </Box>
    );
}
