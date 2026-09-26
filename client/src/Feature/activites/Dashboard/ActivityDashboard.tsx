import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActivityList from './ActivityList';
import ActivityFilters from './activityFilter';
import { tokens } from '../../../theme/theme';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function ActivityDashboard() {
  return (
    <Box sx={{ bgcolor: tokens.bg, minHeight: '100vh', pb: 6 }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ pt: 4, pb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <EmojiEventsIcon sx={{ fontSize: 28, color: tokens.primary }} />
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: tokens.textPrimary,
                fontSize: { xs: '1.5rem', md: '2rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Explore Events
            </Typography>
            <Typography sx={{ fontSize: '0.85rem', color: tokens.textMuted, mt: 0.3 }}>
              Browse all developer meetups, workshops, and tech conferences in Egypt
            </Typography>
          </Box>
        </Box>

        {/* Main Grid */}
        <Grid container spacing={3}>
          {/* Activities List */}
          <Grid size={{ xs: 12, md: 8 }}>
            <ActivityList />
          </Grid>

          {/* Sidebar Filters */}
          <Grid size={{ xs: 12, md: 4 }}>
            <ActivityFilters />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
