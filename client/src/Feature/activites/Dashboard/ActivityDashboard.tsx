import Grid2 from '@mui/material/Grid';
import type { Activity } from "../../../lib/Types";
import ActivityList from './ActivityList';
import ActivityDetails from '../Details/ActivityDetails';
import ActivityForm from '../Form/ActivityForm';
import type { ActivityFormData } from '../../../lib/schemas/activitySchema';

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (data: ActivityFormData) => void;
    deleteActivity: (id: string) => void;
    deletePending?: boolean;
    targetId?: string;
}

export default function ActivityDashboard({
    activities,
    selectActivity,
    cancelSelectActivity,
    selectedActivity,
    openForm,
    closeForm,
    editMode,
    submitForm,
    deleteActivity,
    deletePending,
    targetId
}: Props) {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={7}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    deletePending={deletePending}
                    targetId={targetId}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                )}
                {editMode && (
                    <ActivityForm
                        activity={selectedActivity}
                        closeForm={closeForm}
                        onSubmit={submitForm}
                    />
                )}
            </Grid2>
        </Grid2>
    );
}
