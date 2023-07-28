import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export const AdvertisingText = ({ activeLang }) => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width:"100%",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid",
          borderColor: "borderColor.main",
          borderRadius: 2,
        
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "CB",
            color: "warning.dark",
            p: 1,
           
          }}
        >
          {t("ask1")}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "CB",
            color: "warning.main",
            p: 1,
          }}
        >
          {t("ask2")}
        </Typography>
      </Box>
    </>
  );
};
