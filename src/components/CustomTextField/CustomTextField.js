import { styled, TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const StyledTextField = styled(TextField)(({ theme }) => ({
   borderRadius: '4px',
   backgroundColor: theme.palette.primary.lightBg,
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: 'none',
      },
   },
}));

const CustomTextField = (props, ref) => {
   return <StyledTextField size='small' {...props} inputRef={ref} />;
};

export default forwardRef(CustomTextField);
