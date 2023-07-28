import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { GetStartBtn, H1Title, H2Title, H4Title } from "./Utl";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Section2 = ({sectionColor}) => {
  const { t } = useTranslation();
  return (
    <>
      <section id="section2">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            flexDirection: "column",
            backgroundColor:sectionColor,
            gap: "1rem",
            p: 3,
          }}
        >
          <H1Title title={t("S2L1")} />

          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: { xs: "start", sm: "start" },
              flexDirection: "column",
              gap: "1rem",
            }}
          >
    
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: { xs: "start", sm: "start" },
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <Division   title={t("S2L2")} image={"assets/section2/servers.webp"}/>
              <Division   title={t("S2L3")} image={"assets/section2/logo-design.webp"}/>
              <Division   title={t("S2L4")} image={"assets/section2/web-design.webp"}/>
              <Division   title={t("S2L5")} image={"assets/section2/tools-and-utensils.webp"}/>
              <Division   title={t("S2L6")} image={"assets/section2/message.webp"}/>
              <Division   title={t("S2L7")} image={"assets/section2/online.webp"} />
              <Division   title={t("S2L8")} image={"assets/section2/technical-support.webp"}/>
              <Division   title={t("S2L9")} image={"assets/section2/web-development.webp"}/>
              <Division   title={t("S2L10")} image={"assets/section2/live-chat.webp"}/>
              <Division   title={t("S2L11")} image={"assets/section2/computer.webp"}/>
              <Division   title={t("S2L12")} image={"assets/section2/ssl.webp"} cssName={"sslImage"} />
              <Division   title={t("S2L13")} image={"assets/section2/content.webp"} />
               <GetStartBtn title={t("S2L14")} colorx="white"/>
            </Box>
      
          </Box>
        </Box>
      </section>
    </>
  );
};
const Division = ({ image, title,cssName="section2-image" }) => {
  const str = title.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      <Paper elevation={20}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
          alignItems:"center",
          p: 2,
          maxWidth: "160px",
          minWidth:"160px",
          minHeight:"200px",
          maxHeight:"250px",
          gap:1

        }}
      >
        <Box>
        <img src={image} className={cssName} />
        </Box>
        <Box sx={{flex:1}}>

        <H4Title title={title} colorx={"textColor.main"} alignx="center" />
        </Box>

        
        
        {/* <H4Title title={subtitle} colorx={"textColor.main"} alignx="center" /> */}
      </Paper>
    </>
  );
};
