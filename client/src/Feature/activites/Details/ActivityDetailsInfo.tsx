import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
        <Paper sx={{ mb: 2, borderRadius: 3, overflow: 'hidden' }}>
            <Grid2 container sx={{ alignItems: "center", px: 2.5, py: 2 }}>
                <Grid2 size={{ xs: 2, sm: 1 }}>
                    <InfoIcon color="primary" fontSize="large" />
                </Grid2>
                <Grid2 size={{ xs: 10, sm: 11 }}>
                    <Typography sx={{ lineHeight: 1.6 }}>{activity?.description}</Typography>
                </Grid2>
            </Grid2>

            <Divider />

            <Grid2 container sx={{ alignItems: "center", px: 2.5, py: 2 }}>
                <Grid2 size={{ xs: 2, sm: 1 }}>
                    <CalendarTodayIcon color="primary" fontSize="large" />
                </Grid2>
                <Grid2 size={{ xs: 10, sm: 11 }}>
                    <Typography>{formatDate(activity?.date)}</Typography>
                </Grid2>
            </Grid2>

            <Divider />

            <Grid2 container sx={{ alignItems: "center", px: 2.5, py: 2 }}>
                <Grid2 size={{ xs: 2, sm: 1 }}>
                    <PlaceIcon color="error" fontSize="large" />
                </Grid2>
                <Grid2 size={{ xs: 10, sm: 11 }}>
                    <Typography sx={{ fontWeight: 500 }}>
                       {activity?.venue}{activity?.city ? `, ${activity?.city}` : ''}
                    </Typography>
                </Grid2>
            </Grid2>

            {activity?.level && (
                <>
                    <Divider />
                    <Grid2 container sx={{ alignItems: "center", px: 2.5, py: 2 }}>
                        <Grid2 size={{ xs: 2, sm: 1 }}>
                            <SchoolIcon color="secondary" fontSize="large" />
                        </Grid2>
                        <Grid2 size={{ xs: 10, sm: 11 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                                    Experience Level:
                                </Typography>
                                <Chip
                                    label={activity.level}
                                    color="info"
                                    size="small"
                                    sx={{ fontWeight: 600 }}
                                />
                            </Box>
                        </Grid2>
                    </Grid2>
                </>
            )}

            {activity?.tags && activity.tags.length > 0 && (
                <>
                    <Divider />
                    <Grid2 container sx={{ alignItems: "center", px: 2.5, py: 2 }}>
                        <Grid2 size={{ xs: 2, sm: 1 }}>
                            <LocalOfferIcon color="primary" fontSize="large" />
                        </Grid2>
                        <Grid2 size={{ xs: 10, sm: 11 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mr: 0.5 }}>
                                    Topics:
                                </Typography>
                                {activity.tags.map((tag) => (
                                    <Chip
                                        key={tag}
                                        label={`#${tag}`}
                                        size="small"
                                        variant="outlined"
                                        color="primary"
                                        sx={{ fontWeight: 600 }}
                                    />
                                ))}
                            </Box>
                        </Grid2>
                    </Grid2>
                </>
            )}
        </Paper>
    );
}


