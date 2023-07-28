import React from "react";
import { Box, Typography } from "@mui/material";

export const PakageNAme = ({ title, color = "primary.dark",icon,activeLang }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: color,
          color: color,
          width: "100%",
          boxShadow: 3,
          p: 1,
          height: "50px",
          backgroundColor:color,
          color:"white",
          gap:"1rem"
        }}
      >
        <Typography
          sx={{
            fontFamily: activeLang === "arabic" ? "TB" : "latoLight",
          }}
        >
          {title}
        </Typography>
        {icon}
        {/* <div  className="arrow_box">dsfsdf</div> */}
      </Box>
    </>
  );
};
