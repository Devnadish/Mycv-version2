import React from 'react';
import { Box, Typography } from '@mui/material';
import { WebDesStyle } from './style';

export const WebDes = ({ Eldata,  fontStyel }) => {
  return (
    <>
    <Box sx={WebDesStyle}>
      <Typography
        variant="h6"
        sx={{
          ...fontStyel,
        }}
      >
        {Eldata}
      </Typography>
      </Box>
    </>
  );
};
