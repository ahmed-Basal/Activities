import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router';
function App() {


  return (
    <>
      <Box sx={{ backgroundColor: '#eeeeee', minHeight: '100vh', pb: 4 }}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
           <Outlet/>
          
        </Container>
      </Box>
    </>
  )
}

export default App
