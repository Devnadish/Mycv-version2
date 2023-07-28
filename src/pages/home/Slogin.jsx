import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import {  H3Title } from "./Utl";
export const Slogin = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
         <H3Title title={t("S1L4")}/>
      </Box>
    </>
  );
};
