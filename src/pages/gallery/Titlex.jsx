import React from "react";
import { Box, Typography } from "@mui/material";


export const Titlex = ({ tit }) => {
  return (<> <Box
    sx={{
      borderRadius: 2,
      width: "90%",
      bgcolor: "boxColor.main",
      border: "1px solid",
      borderColor: "borderColor.main",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
      mt:1,
      boxShadow:6
     
    }}
  >
    <Typography variant="h6" color={"textColor.main"}>
      {tit}

    </Typography>
  </Box></>);
};
