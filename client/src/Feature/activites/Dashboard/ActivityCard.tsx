import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import type { Activity } from "../../../lib/Types";

type Props = {
    activity: Activity;
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    deletePending?: boolean;
    isSelected?: boolean;
}

export default function ActivityCard({ activity, selectActivity, deleteActivity, deletePending, isSelected }: Props) {
    return (
        <Card 
            sx={{ 
                borderRadius: 3,
                border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
                boxShadow: isSelected ? '0 6px 20px rgba(25, 118, 210, 0.25)' : '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease-in-out'
            }}
        >
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
                        variant={isSelected ? "contained" : "outlined"}
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
