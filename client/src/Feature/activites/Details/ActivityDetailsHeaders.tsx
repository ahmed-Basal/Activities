import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router";
import type { Activity } from "../../../lib/Types";

import useactivites from '../../../lib/Hooks/useactivites';
import { formatDate } from '../../../lib/UTlity/Utle';

interface Props {
    activity: Activity;
}

export default function ActivityDetailsHeader({activity}: Props) {
    const { updateActivity } = useactivites(activity?.id);
    const isCancelled = activity?.isCancelled ?? false;
    const isHost = true;
    const isGoing = true;
    const loading = false;

    return (
        <Card sx={{ position: 'relative', mb: 2, backgroundColor: 'transparent', overflow: 'hidden' }}>
        {isCancelled && (
            <Badge
                sx={{ position: 'absolute', left: 40, top: 20, zIndex: 1000 }}
                color="error"
                badgeContent="Cancelled"
            />
        )}
        <CardMedia
            component="img"
            height="300"
            image={`/images/categoryImages/${activity?.category || 'travel'}.jpg`}
            alt={`${activity?.category || 'activity'}.jpg`}
        />
        <Box sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            color: 'white',
            padding: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1.0), transparent)',
            boxSizing: 'border-box',
        }}>
            {/* Text Section */}
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{activity?.title}</Typography>
                <Typography variant="subtitle1">{formatDate(activity?.date)}</Typography>
                <Typography variant="subtitle2">
                    Hosted by <Link to={`/profiles/username`} style={{ color: 'white', fontWeight: 'bold' }}>Bob</Link>
                </Typography>
            </Box>

            {/* Buttons aligned to the right */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                {isHost ? (
                    <>
                        <Button
                            variant='contained'
                            color={isCancelled ? 'success' : 'error'}
                            disabled={updateActivity.isPending}
                            onClick={() => {
                                if (activity) {
                                    updateActivity.mutate({
                                        ...activity,
                                        isCancelled: !isCancelled
                                    });
                                }
                            }}
                        >
                            {isCancelled ? 'Re-activate Activity' : 'Cancel Activity'}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={`/manage/${activity?.id}`}
                            disabled={isCancelled}
                        >
                            Manage Event
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        color={isGoing ? 'primary' : 'info'}
                        onClick={() => { }}
                        disabled={isCancelled || loading}
                    >
                        {isGoing ? 'Cancel Attendance' : 'Join Activity'}
                    </Button>
                )}
            </Box>
        </Box>
    </Card>
    )}
