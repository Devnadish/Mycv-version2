import React from "react";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
 
import { GetStartBtn,H1Title,H3Title } from "./Utl";
import { useTranslation } from "react-i18next";

export const Section3 = ({sectionColor}) => {
  const { t } = useTranslation();

  return (
    <>
     <section id="section3">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
       height: "100%",
          gap: "1rem",
          p: 2,
          backgroundColor:sectionColor,
        }}
      >
        {/* <p style={{ color: "black" }}> Section3</p> */}
        <H1Title title={t("S3L1")} colorx={"textColor.main"} />
        <hr style={{ width: "40%" }} />
        <H3Title title={t("S3L2")} colorx={"textColor.main"} />
        {/* <GetStartBtn title={t("S3L3")} /> */}
      </Box>
      </section>
    </>
  );
};
