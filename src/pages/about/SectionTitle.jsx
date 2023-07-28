import { Box, Typography } from "@mui/material";
import React from "react";
 

function SectionTitle({ title,icon }) {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%" ,
        bgcolor: "inherit",
        overflowWrap: "break-word",
        padding:"4px 14px 14px 14px",
        borderBottom:"1px solid",
        borderColor:"borderColor.main"
        // backgroundColor:"backGroundColor.main"
        
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "capitalize",
          // width: "100%",
          color: "textColor.main",
         
        }}
      >
        {title}
      </Typography>
      {icon}

    </Box>
  );
}

export default SectionTitle;
