import { Box, styled, Typography, Button, InputAdornment } from '@mui/material';
import React from 'react';
import CustomStepper from '../CustomStepper/CustomStepper';
import CustomTextField from '../CustomTextField/CustomTextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const PrimaryButton = styled(Button)(({ theme }) => ({
   background: theme.palette.primary.main,
   flex: 1,
   '&:last-child': {
      marginLeft: '1rem',
   },
}));

const Wrapper = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.darkBg,
   borderRadius: theme.spacing(1),
   width: '100%',
   maxWidth: '400px',
   padding: theme.spacing(2),
}));

export const Ul = styled('ul')(({ theme }) => ({
   listStyle: 'none',
   padding: 0,
   width: '100%',
   minWidth: '368px',
   '& li': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      padding: theme.spacing(1),
      borderRadius: '8px',
      '&:nth-of-type(odd)': {
         background: theme.palette.primary.lightBg,
      },
      '& p': {
         display: 'flex',
         alignItems: 'center',
         fontSize: '1rem',
         fontWeight: 300,
      },
      '& h6': {
         fontWeight: 500,
         fontSize: '1rem',
         color: theme.palette.primary.main,
      },
   },
}));

const Form = () => {
   // const theme = useTheme();
   const [activeStep, setActiveStep] = React.useState(0);

   const fields = [
      <>
         <CustomTextField
            type='text'
            placeholder='Full Name'
            InputProps={{
               startAdornment: (
                  <InputAdornment position='start'>
                     <PersonIcon />
                  </InputAdornment>
               ),
            }}
            fullWidth
            sx={{
               mb: 2,
            }}
         />
         <CustomTextField
            placeholder='Password'
            type='password'
            InputProps={{
               startAdornment: (
                  <InputAdornment position='start'>
                     <LockIcon />
                  </InputAdornment>
               ),
            }}
            fullWidth
         />
      </>,
      <>
         <CustomTextField
            placeholder='Email'
            type='email'
            InputProps={{
               startAdornment: (
                  <InputAdornment position='start'>
                     <EmailIcon />
                  </InputAdornment>
               ),
            }}
            fullWidth
            sx={{
               mb: 2,
            }}
         />
         <CustomTextField
            placeholder='Phone'
            type='phone'
            InputProps={{
               startAdornment: (
                  <InputAdornment position='start'>
                     <CallIcon />
                  </InputAdornment>
               ),
            }}
            fullWidth
         />
      </>,
      <>
         <Ul>
            <li>
               <Typography variant='body' component='p'>
                  <PersonIcon sx={{ mr: 1 }} /> Full Name
               </Typography>
               <Typography variant='h6'>Mizanur Rahman</Typography>
            </li>
         </Ul>
      </>,
   ];

   return (
      <Wrapper>
         <Typography
            variant='h6'
            sx={{
               color: '#ffffff',
               textAlign: 'center',
               mb: 2,
            }}
         >
            Create account in 3 simple step!
         </Typography>
         <CustomStepper activeStep={activeStep} />

         <Box
            sx={{
               mt: 4,
            }}
         >
            {fields[activeStep]}

            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 4,
               }}
            >
               <PrimaryButton
                  onClick={() => setActiveStep(activeStep - 1)}
                  disabled={activeStep === 0}
                  variant='contained'
               >
                  Previous
               </PrimaryButton>
               <PrimaryButton
                  variant='contained'
                  onClick={() => setActiveStep(activeStep + 1)}
                  disabled={activeStep === 3}
               >
                  {activeStep === 2 ? 'Submit' : 'Next'}
               </PrimaryButton>
            </Box>
         </Box>
      </Wrapper>
   );
};

export default Form;
