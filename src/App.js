import { Fragment } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';

import Header from './components/navbar/Header';
import LocationsTab from './components/LocationsTab';
import LocationsCards from './components/LocationsCards';


const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>

        <Box>
          <Header />
          <LocationsTab />
        </Box>
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: 100,
          overflowY: 'scroll'
        }}>
          <Container maxWidth='xl' sx={{ mb: 3 }}>
            <LocationsCards />
          </Container>
        </Box>

      </Box>
    </Fragment>
  );
}



export default App;
