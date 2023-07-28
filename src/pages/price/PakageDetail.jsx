import React from "react";
import { Box, Typography } from "@mui/material";
import { FcCheckmark } from "react-icons/fc";

export const PakageDetail = ({ detal, activeLang }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "column",
          width: "100%",
          gap: ".5rem",
          p: 1,
       
         
          // backgroundColor:"green"
          
        }}
      >
        {detal?.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  gap: "1rem",
                }}
              >
                <FcCheckmark />
                <Typography color={"black"} sx={{
                  color:"textColor.main"
                  
                }}>{el.title}</Typography>
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};
