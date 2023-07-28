import React from "react";
import { Box } from "@mui/material";

export const Boxstl = ({ w, h, children, range }) => {
  return (
    <>
      <Box
        sx={{
          width: w,
          height: h,
          bgcolor: "boxColor.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          gap: 2,
          p: 1,
          mb: 4,
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </>
  );
};
