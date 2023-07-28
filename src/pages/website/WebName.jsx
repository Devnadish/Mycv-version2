import React from "react";
import { Box, Typography } from "@mui/material";
import { WebNameStyle } from "./style";

export const WebName = ({ Eldata,  activeLang  }) => {
  return (
    <>
      <Box sx={WebNameStyle}>
        <Typography variant="h6" sx={{
          ...WebNameStyle,
          
        }}>
          {Eldata}
        </Typography>
      </Box>
    </>
  );
};
