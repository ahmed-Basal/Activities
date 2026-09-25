import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Event from '@mui/icons-material/Event';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ActivityFilters() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, borderRadius: 3 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Box sx={{ width: '100%'  }}>
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'primary.main' }}>
                        <FilterListIcon sx={{ mr: 1 }} />
                        Filters
                    </Typography>
                    <MenuList>
                        <MenuItem>
                            <ListItemText primary='All events' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemText primary="I'm going" />
                        </MenuItem>
                        <MenuItem>
                            <ListItemText primary="I'm hosting" />
                        </MenuItem>
                    </MenuList>
                </Box>
            </Paper>
            <Box component={Paper} sx={{ width: "100%", p: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', mb: 1 }}>
                    <Event sx={{ mr: 1 }} />
                    Select date
                </Typography>
                <Calendar />
            </Box>
        </Box>
    );
}