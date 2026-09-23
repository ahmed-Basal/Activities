import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import type { Activity } from "../../../lib/Types";

type Props = {
    activity: Activity;
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    deletePending?: boolean;
}

export default function ActivityCard({ activity, selectActivity, deleteActivity, deletePending }: Props) {
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
                    <Button 
                        onClick={() => selectActivity(activity.id)} 
                        size="medium" 
                        variant="contained"
                    >
                        View
                    </Button>
                    <Button 
                        onClick={() => deleteActivity(activity.id)} 
                        color="error" 
                        size="medium" 
                        variant="contained"
                        loading={deletePending}
                        disabled={deletePending}
                    >
                        Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}
