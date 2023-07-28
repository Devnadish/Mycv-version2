import React from "react";
import { BsInboxes } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { QuastionBox } from "./footerStyle";

export function PersonalQuastion() {
  const PersonMail = localStorage.getItem("mail");
  return (
    <Box sx={QuastionBox}>
      <Button
        component={Link}
        to={`/xx/${PersonMail}`}
        variant="contained"
        
        sx={{
          display:"flex",
          gap:".5rem",
          minWidth: 0,
          padding: "6px",
          height: "fit-content",
          backgroundColor:"darkGrey.main"
        }}
      >
        <BsInboxes color="white" />
         <Typography
          sx={{
            fontSize: ".7rem",
            p: 0,
            m: 0,
            lineHeight: "1",
            color: "textColor.main",
            fontWeight: "bold",
          }}
        >
          {/* {rowCount} */}
          999
        </Typography>
      </Button>
      {/* Personal Quastion Button */}
      
       
      
    </Box>
  );
}
