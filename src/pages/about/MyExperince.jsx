import React from "react";
import { Box, Typography } from "@mui/material";

export const MyExperince = ({ t }) => {
  return (
    <>
      <Box display="flex" alignItems={"center"} justifyContent="center">
        <Typography
          color="background.paper"
          variant={"h4"}
          sx={{
            mr: 1,
            ml: 1,
            color:"textColor.main"
          }}
        >
          {t("develpoer")} {/* مطور  */}
        </Typography>
        <Typography
          variant={"h4"}
          color="warning.main"
          sx={{
            display: "inline",
            fontSize: { xs: ".7rem", md: "1rem" },
            // fontFamily: "CB",
            color:"orangeColor.main"
          }}
        >
          {t("develpoerSince")} {/* خبرة اكثر  */}
        </Typography>
      </Box>
    </>
  );
};
