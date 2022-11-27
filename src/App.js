import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import Form from './components/Form/Form';
import theme from './theme/theme';

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
               alignItems: 'center',
            }}
         >
            <Form />
         </Box>
      </ThemeProvider>
   );
}

export default App;
