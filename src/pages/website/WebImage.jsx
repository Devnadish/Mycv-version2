import React from 'react';
import { Box } from '@mui/material';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const WebImage = ({ Eldata, Elalt }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "boxColor.main",
          p:2,
        }}
      >
        <LazyLoadImage
          alt={Elalt}
          effect="blur"
          src={Eldata}
          style={{
            borderRadius: "10px",
            maxWidth: "350px",
            width: "180px",
            height: "230px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} />
      </Box>
    </>
  );
};
