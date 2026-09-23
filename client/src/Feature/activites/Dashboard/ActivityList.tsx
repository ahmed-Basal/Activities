import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
import type { Activity } from "../../../lib/Types";

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    deletePending?: boolean;
    targetId?: string;
    selectedActivityId?: string;
}

export default function ActivityList({ 
    activities, 
    selectActivity, 
    deleteActivity, 
    deletePending, 
    targetId,
    selectedActivityId 
}: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(activity => (
                <ActivityCard
                    key={activity.id}
                    activity={activity}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    deletePending={deletePending && targetId === activity.id}
                    isSelected={selectedActivityId === activity.id}
                />
            ))}
        </Box>
    );
}
