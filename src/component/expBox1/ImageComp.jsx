import React from "react";
import  Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";
import  Avatar from "@mui/material/Avatar";
import { useTranslation } from 'react-i18next';
 
 


const ImageComp = ({ imgx, pres, prog }) => {
    const { t } = useTranslation();
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 1 },
            border: "1px solid",
            borderColor: "borderColor.main",
            backgroundColor: "boxColor.main",
            borderRadius:2,
            "&:hover": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Avatar
                alt="Remy Sharp"
                src={imgx}
                sx={{ width: 50, height: 50 }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop:"1px solid ",
              borderColor:"borderColor.main",
              px:1,py:.5,
              gap:"1rem",
              color:"textColor.main"

            }}
          >
            <Typography fontSize={".8rem"}> {pres}</Typography>
          </Box>
        </Box>
      </>
    );
  };
  export default ImageComp;