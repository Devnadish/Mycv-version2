import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const ReadMore = ({ id, txt }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          flexDirection: "column",
          gap:"1rem"
        }}
      >
        <Typography>
          {txt}
          <span style={{ color: "green" }}>...</span>
        </Typography>
        <Link sx={{ color: "green" }}>قراة المزيد</Link>
      </Box>
    </>
  );
};
