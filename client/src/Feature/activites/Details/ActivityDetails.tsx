import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import type { Activity } from "../../../lib/Types";
import CardMedia from '@mui/material/CardMedia';

type Props = {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm?: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    if (!activity) return null;

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                image={`/images/categoryImages/${activity.category}.jpg`}
                title={activity.title}
                sx={{ height: 140 }}
            />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
                <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Button onClick={() => openForm?.(activity.id)} color="primary" size="medium" variant="contained">Edit</Button>
                <Button 
                    onClick={cancelSelectActivity} 
                    color="inherit" 
                    size="medium" 
                    variant="contained"
                >
                    Cancel
                </Button>
            </CardActions>
        </Card>
    );
}