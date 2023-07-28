import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { GetStartBtn, H1Title, H3Title } from "./Utl";
import { useTranslation } from "react-i18next";
export const Section4 = ({sectionColor}) => {
  const { t } = useTranslation();
  return (
    <>
    <section id="section4">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems:"center",
          flexDirection:   "column" ,
          backgroundColor: sectionColor,
          height: "100%",
          gap: ".5rem",
          p: 2,
        }}
      >
        <H1Title title={t("S4L1")}  />
        <hr style={{ width: "40%" }} />
        <H3Title title={t("S4L2")}   />
        {/* <GetStartBtn title={t("getStartBtn")} /> */}
      </Box>
      </section>
    </>
  );
};
