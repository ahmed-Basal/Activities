import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Group from '@mui/icons-material/Group';

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
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuList sx={{ display: 'flex', p: 0 }}>
                <MenuItem sx={{ display: 'flex', gap: 2 }}>
                  <Group fontSize="large" />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Reactivities
                  </Typography>
                </MenuItem>
              </MenuList>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <MenuList sx={{ display: 'flex', flexDirection: 'row', p: 0 }}>
                <MenuItem
                  sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  Activities
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Box>

            <Button
              size="large"
              variant="contained"
              color="warning"
              sx={{ fontWeight: 'bold' }}
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
