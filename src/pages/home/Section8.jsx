import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import {AiOutlineFileSearch,AiOutlineWhatsApp,AiOutlineMail} from "react-icons/ai"
import {MdTextsms} from "react-icons/md"
import {IoShareSocialOutline} from "react-icons/io5"
import { H1Title,H2Title } from "./Utl";
import { useTranslation } from "react-i18next";
export const Section8 = ({sectionColor}) => {
  const { t } = useTranslation();

  return (
    <>
     <Box id="section8" sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection:{xs:"column",sm:"row"},
          backgroundColor:sectionColor
        }}>
      
        
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            gap: "1rem",
            p:2,
            backgroundColor:sectionColor
          }}
        >
         
          <H1Title title={t("S8L1")}   />
          <H2Title title={t("S8L2") }   />
          <ShowHint icon={<AiOutlineFileSearch size={"1.5rem"}/>} txt={t("S8L3")} />
          <ShowHint icon={<AiOutlineWhatsApp size={"1.5rem"}/>} txt={t("S8L4")} />
          <ShowHint icon={<MdTextsms size={"1.5rem"}/>} txt={t("S8L5")} />
          <ShowHint icon={<AiOutlineMail size={"1.5rem"}/>} txt={t("S8L6")} />
          <ShowHint icon={<IoShareSocialOutline size={"1.5rem"}/>} txt={t("S8L7")} />
        </Box>
        

      </Box>
    
    </>
  );
};

const ShowHint=({icon,txt})=>{return (
  <>
    <Paper
    elevation={15}
      sx={{
        display: "flex",
        // width: "100%",
        backgroundColor: "black",
        alignItems: "center",
        gap:2,
        p:2,
        "&:hover": {
          border: "1px solid",
          borderColor: "primary.main",
        },
      }}
    >
      {icon}
      <Typography>
      {txt}
      </Typography>
    </Paper>
  </>
);}