import React from "react";
import { Box } from "@mui/material";
import { H1Title,H2Title } from "./Utl";
import { useTranslation } from "react-i18next";
import { QuationArea } from "./QuationArea";
import { Slogin } from "./Slogin";




export function Section1({ sectionColor}) {
  const { t } = useTranslation();
  return (
    <section id="section1">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: {xs:"center",sm:"space-around"},
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: ".5rem",
          mt:1,
          backgroundColor:sectionColor

        }}
      >
        <Box sx={{ display:"flex",width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <H1Title title={t("S1L1")} />
          <H2Title title={t("S1L2")} />
        </Box>
        <Box
          sx={{
            margin: "auto",
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            gap:".5rem"
           
            // gap:".5rem"
          }}
        >
          <QuationArea />
          <Slogin />
        </Box>
      </Box>
    </section>
  );
}
