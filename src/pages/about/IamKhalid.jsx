import React from "react";
import { Box, Typography } from "@mui/material";

export function IamKhalid({ t }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Typography
        color="textColor.main"
        variant={"h4"}
        sx={{
          display: "inline",
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
          
        }}
      >
        {t("himsg")}
      </Typography>

      <Typography
        sx={{
          display: "inline",
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
          
          color:"orangeColor.main",
        }}
        variant={"h3"}
      >
        {t("iamKhalid")} {/* انا خالد */}
      </Typography>
    </Box>
  );
}
