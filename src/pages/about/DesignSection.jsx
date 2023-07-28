import React from "react";
import {
  Stack,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import ps from "../../assets/expImage/ps.svg";
import ai from "../../assets/expImage/ai.svg";
import pr from "../../assets/expImage/pr.svg";
import ae from "../../assets/expImage/ae.svg";
import { FaPalette } from "react-icons/fa"
import "./sectionStyle.css"
import ImageComp from "../../component/expBox1/ImageComp";

import SectionTitle from "./SectionTitle";
import { sectionStyle } from "./style";

function DesignSection({ activeLang}) {
  const { t } = useTranslation();
  return (
    <>
         
      <Stack
        sx={sectionStyle}
      >
         <SectionTitle title={t("designtitle")}   icon={<FaPalette color={"#8C8279"} size={"2rem"}/>}/>
        <ImageComp imgx={ps} prog={"70%"} pres={"70%"} />
        <ImageComp imgx={ai} prog={"60%"} pres={"60%"} />
        <ImageComp imgx={pr} prog={"60%"} pres={"60%"} />
        <ImageComp imgx={ae} prog={"50%"} pres={"50%"} />
      </Stack>
    </>
  );
}

export default DesignSection;
 