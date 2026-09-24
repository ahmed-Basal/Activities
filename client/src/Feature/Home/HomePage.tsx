import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Homepage() {
    return (
        <Container sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
                <Typography variant="h4">Home Page</Typography>
            </Box>
        </Container>
    );
}