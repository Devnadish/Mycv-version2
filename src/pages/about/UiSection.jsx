import React from "react";
import {
  
  Stack,
  
   
  
} from "@mui/material";

import xd from "../../assets/expImage/xd.svg";
import figma from "../../assets/expImage/icons8-figma.svg";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';
import ImageComp from "../../component/expBox1/ImageComp";
import { sectionStyle } from "./style";
import { FiFigma } from "react-icons/fi"


function UiSection({activeLang}) {
  const { t } = useTranslation();
  return (
    <>
        
      <Stack
         sx={sectionStyle}
      >
          <SectionTitle title={t("uiux")}  icon={<FiFigma color={"#8C8279"} size={"2rem"}/>}/>
        <ImageComp imgx={xd} prog={"70%"} pres={"70%"} />
        <ImageComp imgx={figma} prog={"65%"} pres={"60%"} />
      </Stack>
    </>
  );
}

export default UiSection;
 