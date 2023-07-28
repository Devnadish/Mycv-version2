import React from "react";
import { Box } from "@mui/material";

export const Sv2 = () => {
  return (
    <>
    <section id="firstimage">
      <Box
        sx={{
          display: {xs:"none",sm:"flex"},
          width: "100%",
          justifyContent: "center",
 
          height: "100%",
        }}
      >
        <img
          src="/tt.png"
          alt="An eCommerce site for a soda company with a sales graph and mobile checkout"
          style={{ width: "90%", height: "auto", objectFit: "contain" }} />
      </Box>
      </section>
    </>
  );
};
