import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router';
import { useNavigate } from 'react-router';
import useactivites from '../../../lib/Hooks/useactivites';
import { useParams } from 'react-router';
export default function ActivityDetails() {
    

   const navigate=useNavigate();
   const{id}=useParams();
   const {activity, isLoadingActivity}=useactivites(id);

    if(isLoadingActivity) return <Typography variant="h5">Loading...</Typography>
    if(!activity) return <Typography variant="h5">Activity not found</Typography>
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
             <Button component={Link} to={`/manage/${activity.id}`}  color="primary" >Edit</Button>
             <Button variant="contained" color="secondary" onClick={() => navigate(`/activities`)}>Cancel</Button>
             
             </CardActions>
        </Card>
    );
}