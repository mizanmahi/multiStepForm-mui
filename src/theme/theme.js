import { createTheme } from '@mui/material';

const theme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: 'hsl(175,92%,51%)',
         darkBg: 'hsl(256,31%,15%)',
         lightBg: 'hsl(257,23%,25%)',
         gray: 'hsl(254,10%,34%)',
      },
   },
   typography: {
      fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
   }
});

export default theme;
