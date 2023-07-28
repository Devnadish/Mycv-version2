import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import me from "../../assets/expImage/meOnly2.png";
import { HireME } from "./HireME";
import { heroImageStyle, mainHeroStyle, texareaStyle } from "./style";
import { MyExperince } from "./MyExperince";
import { IamKhalid } from "./IamKhalid";

function HeroBanner({ activeLang }) {
  const { t } = useTranslation();
  return (
    <>
      <Box sx={mainHeroStyle}>
        {/* Image Area */}
        <Box sx={heroImageStyle}>
          <LazyLoadImage
            alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
            effect="blur"
            src={me}
            className="smallscreen"
          />
        </Box>
        {/* text Area */}
        <Box sx={texareaStyle}>
          <IamKhalid t={t} />
          <MyExperince t={t} />
          <HireME />
        </Box>
        {/* Butoon area */}
      </Box>

      {/* medea area */}
    </>
  );
}
export default HeroBanner;


