import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Group from '@mui/icons-material/Group';
import { Link } from 'react-router';

export default function Homepage() {
    return (
        <Paper
            sx={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 3, sm: 5, md: 6 },
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                px: { xs: 2, sm: 4 },
                textAlign: 'center',
                backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    color: 'white',
                    gap: { xs: 1.5, sm: 3 }
                }}
            >
                <Group sx={{ height: { xs: 55, sm: 80, md: 110 }, width: { xs: 55, sm: 80, md: 110 } }} />
                <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem' }, fontWeight: 'bold' }}>
                    Reactivities
                </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', sm: '2rem', md: '3rem' } }}>
                Welcome to reactivities
            </Typography>
            <Button
                component={Link}
                to="/activities"
                size="large"
                variant="contained"
                sx={{
                    height: { xs: 56, sm: 70, md: 80 },
                    borderRadius: 4,
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    px: { xs: 3, sm: 5 }
                }}
            >
                Take me to the activities!
            </Button>
        </Paper>
    );
}