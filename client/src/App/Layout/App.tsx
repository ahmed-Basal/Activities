import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router';
import HomePage from '../../Feature/Home/HomePage';
import { tokens } from '../../theme/theme';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Box
      sx={{
        bgcolor: tokens.bg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isHome ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Box sx={{ flex: 1 }}>
            <Container maxWidth="xl" sx={{ mt: 3 }}>
              <Outlet />
            </Container>
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
}

export default App;
