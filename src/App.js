import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import Form from './components/Form/Form';
import theme from './theme/theme';
import Lottie from 'lottie-react';
import registerLottie from './assets/register.json';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Box
            sx={{
               bgcolor: 'primary.lightBg',
               width: '100vw',
               height: '100vh',
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            <Box sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}>
               <Lottie
                  animationData={registerLottie}
                  style={{
                     width: '300px',
                  }}
               />
               <Form />
            </Box>
         </Box>
      </ThemeProvider>
   );
}

export default App;
