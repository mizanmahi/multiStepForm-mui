import {
   Box,
   styled,
   Typography,
   Button,
   InputAdornment,
   Link,
} from '@mui/material';
import React from 'react';
import CustomStepper from '../CustomStepper/CustomStepper';
import CustomTextField from '../CustomTextField/CustomTextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useForm } from 'react-hook-form';

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
   padding: theme.spacing(3),
}));

export const Ul = styled('ul')(({ theme }) => ({
   listStyle: 'none',
   padding: 0,
   width: '350px',
   maxWidth: '100%',

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
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const submitHandler = (userData) => {
      console.log(userData);

      if (activeStep === 0) {
         setActiveStep(1);
         return;
      }
      if (activeStep === 1) {
         setActiveStep(2);
         return;
      }

      // send to backend
      console.log('Sending to backend');
   };
   console.log(errors)

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
            {...register('fullName', {
               required: {
                  value: true,
                  message: 'Full name is required',
               },
            })}
            error={errors?.fullName}
            helperText={errors.fullName && errors.fullName.message}
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
            {...register('password', {
               required: {
                  value: true,
                  message: 'Please input a password',
               },
               minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
               },
            })}
            error={errors.password}
            helperText={errors.password ? errors.password.message : ''}
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
            {...register('email', {
               required: {
                  value: true,
                  message: 'Email is Required',
               },
               pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
               },
            })}
            error={errors?.email}
            helperText={errors.email && errors.email.message}
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
            {...register('phone', {
               required: {
                  value: true,
                  message: 'Please input a number',
               },
               minLength: {
                  value: 11,
                  message: 'Number must be at least 11 characters long',
               },
               maxLength: {
                  value: 11,
                  message: 'Number must be at most 11 characters long',
               },
            })}
            error={errors.phone}
            helperText={errors.phone && errors.phone.message}
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
            <li>
               <Typography variant='body' component='p'>
                  <EmailIcon sx={{ mr: 1 }} /> Email
               </Typography>
               <Typography variant='h6'>mizanmhai24@gmail.com</Typography>
            </li>
            <li>
               <Typography variant='body' component='p'>
                  <CallIcon sx={{ mr: 1 }} /> Phone
               </Typography>
               <Typography variant='h6'>01620705755</Typography>
            </li>
         </Ul>
      </>,
   ];

   console.log(activeStep);

   return (
      <Wrapper>
         <Typography
            variant='h5'
            sx={{
               color: '#ffffff',
               textAlign: 'center',
               mb: 3,
               fontWeight: 300,
            }}
         >
            Create account in 3 simple step!
         </Typography>
         <CustomStepper activeStep={activeStep} />

         <Box
            sx={{
               mt: 4,
            }}
            component='form'
            onSubmit={handleSubmit(submitHandler)}
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
                  disabled={activeStep >= 3}
                  type='submit'
               >
                  {activeStep >= 2 ? 'Submit' : 'Next'}
               </PrimaryButton>
            </Box>
         </Box>
         <Typography
            sx={{
               fontWeight: 300,
               fontSize: '14px',
               textAlign: 'center',
               mt: 4,
            }}
         >
            Already have an account? <Link>Login</Link>
         </Typography>
      </Wrapper>
   );
};

export default Form;
