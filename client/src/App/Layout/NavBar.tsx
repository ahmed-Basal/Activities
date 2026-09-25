import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Group from '@mui/icons-material/Group';
import { NavLink } from 'react-router';
import MenuitemLink from '../Shared/Compenet/MenuitemLink';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 1, md: 2 },
              py: { xs: 1.5, md: 0.5 },
            }}
          >
            <Box>
              <MenuList sx={{ display: 'flex', p: 0 }}>
                <MenuItem component={NavLink} to="/" sx={{ display: 'flex', gap: 1.5, px: 2 }}>
                  <Group sx={{ fontSize: { xs: 30, sm: 35 } }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' } }}>
                    Reactivities
                  </Typography>
                </MenuItem>
              </MenuList>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <MenuList
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  p: 0,
                  gap: { xs: 0.5, sm: 1 },
                }}
              >
                <MenuitemLink to="/activities">Activities</MenuitemLink>
                <MenuitemLink to="/createActivity">Create Activity</MenuitemLink>
              </MenuList>
            </Box>

            <Box>
              <MenuList sx={{ display: 'flex', p: 0 }}>
                <MenuItem sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 'bold', px: 2 }}>
                  User menu
                </MenuItem>
              </MenuList>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
