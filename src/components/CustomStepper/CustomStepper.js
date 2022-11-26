import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Basic', 'Contact', 'Confirm'];

const CustomStepper = ({ activeStep }) => {
   return (
      <Box sx={{ width: '100%' }}>
         <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
               '& .Mui-active': {},
               '& .Mui-completed': {
                  '& .MuiStepLabel-iconContainer circle': {
                     color: 'primary.main',
                  },
                  '& .MuiStepLabel-label': {
                     color: 'primary.main',
                  },
               },
               '& .MuiStepLabel-label': {
                  color: '#908d99',
               },
            }}
         >
            {steps.map((label) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
      </Box>
   );
};

export default CustomStepper;
