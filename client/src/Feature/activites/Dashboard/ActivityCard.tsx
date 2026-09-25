import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AccessTime from '@mui/icons-material/AccessTime';
import Place from '@mui/icons-material/Place';
import { Link } from 'react-router';
import {format} from "date-fns"
import type { Activity } from '../../../lib/Types';
type Props = {
    activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
   const isHost=false;
    const  isGoing=false;
    const label= isHost ?"You Are Hosting":"you are going";
    const isCanceled=activity.isCancelled;
    const color=isHost ? "primary":isGoing?"success": "error";
    return (
        <Card elevation={3} sx={{ borderRadius: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardHeader
                    avatar={<Avatar sx={{ height: 80, width: 80 }} />}
                    title={activity.title}
                    titleTypographyProps={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}
                    subheader={
                        <>
                            Hosted by{' '} <Link to={`/profiles/bob`}>Bob</Link>
                        </>
                    }
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 1 }}>
                   {(isHost || isGoing) && <Chip label={label} color={color} sx={{ width: '100px' }} />}
                   {isCanceled && <Chip label="Canceld" color={color} sx={{ width: '100px' }} />}
                </Box>
            </Box>
            <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 1.5, sm: 3 }, mb: 2, px: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTime sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary" noWrap>
                            {format(new Date(activity.date), 'dd MMM yyyy h:mm a')}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Place sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                            {activity.venue}
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', gap: 2, backgroundColor: 'grey.200', py: 3, pl: 3 }}>
                    Attendees go there 
                </Box>
            </CardContent>
            <CardContent sx={{  pb: 2 }}>
                <Typography variant='body2'>{activity.description} </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button component={Link} to={`/activities/${activity.id}`}>
                      
                        View
                    </Button>
                    <Button
                     
                        color="error"
                        size="medium"
                        variant="contained"
                      
                    >
                        Delete
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
