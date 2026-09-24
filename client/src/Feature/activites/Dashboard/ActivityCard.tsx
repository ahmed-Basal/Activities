import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import type { Activity } from '../../../lib/Types';
import useactivites from '../../../lib/Hooks/useactivites';

type Props = {
    activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
    const { deleteActivity } = useactivites();
    const navigate = useNavigate();

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
                <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button onClick={() => navigate(`/activities/${activity.id}`)}>
                      
                        View
                    </Button>
                    <Button
                        onClick={() => deleteActivity.mutate(activity.id)}
                        color="error"
                        size="medium"
                        variant="contained"
                        loading={deleteActivity.isPending && deleteActivity.variables === activity.id}
                        disabled={deleteActivity.isPending}
                    >
                        Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}
