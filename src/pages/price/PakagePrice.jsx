import React from "react";
import { Box, Typography } from "@mui/material";
export const PakagePrice = ({ title, color = "primary.dark", icon }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height:"35px",
        
          backgroundColor:color,
          color:"textColor.main"
        }}
      >
        <Typography sx={{fontWeight:"bold",  fontSize:"1.5rem",}}>

        {title}
        </Typography>
      </Box>
    </>
  );
};
