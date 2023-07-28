import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { Typography, Box, IconButton } from "@mui/material";

export function UserComponent({ userData }) {
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        p: 1,
      }}
    >
      <Box>
        <IconButton size="small">
          <RiLogoutCircleRLine color={"rgba(255,255,255,0.8)"} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "textColor.main",
          }}
        >
          {userData.userMail}
        </Typography>
        <FaUserAlt color={"rgba(255,255,255,0.5)"} />
      </Box>
    </Box>
  );
}
