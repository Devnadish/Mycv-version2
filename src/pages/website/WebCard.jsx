import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { WebImage } from "./WebImage";
import { WebDes } from "./WebDes";
import { WebLink } from "./WebLink";
import { WebName } from "./WebName";
import { WebCardStyle, fontStyel, titleStyel } from "./style";

export const WebCard = ({ el, activeLang }) => {
  const { t } = useTranslation();
  const titleFontStyle={
    ...titleStyel,
    fontFamily: activeLang === "arabic" ? "CB" : "latoBold",
  }
  return (
    <>
      <Box sx={WebCardStyle} id="webcard">
        <Box sx={{display:"flex",width:"100%"}}>
        <WebName
          title={t("siteName")}
          fontStyel={fontStyel}
          titleStyel={titleFontStyle}
          Eldata={el.Name}
          activeLang={activeLang}
        />
          <WebLink
          title={t("siteUrl")}
          fontStyel={fontStyel}
          titleStyel={titleFontStyle}
          Eldata={el.url}
          activeLang={activeLang}
        />
        </Box>
        <WebImage Eldata={el.img} Elalt={el.Name} />
      
        <WebDes
          title={t("sitedesc")}
          fontStyel={fontStyel}
          titleStyel={titleFontStyle}
          Eldata={el.desc}
          activeLang={activeLang}
        />
      </Box>
    </>
  );
};
