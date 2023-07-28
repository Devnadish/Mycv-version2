import React from "react";
import { Stack} from "@mui/material";
import { useTranslation } from 'react-i18next';
import msql from "../../assets/expImage/icons8-mysql-logo.svg";
import fire from "../../assets/expImage/icons8-firebase.svg";
import SectionTitle from "./SectionTitle";
import ImageComp from "../../component/expBox1/ImageComp";
import { sectionStyle } from "./style";
import { FaServer } from "react-icons/fa"




function DBSection({activeLang}) {
  const { t } = useTranslation();
  return (
    <>
     
      <Stack
        sx={sectionStyle}
      >
         <SectionTitle title={t("database")}  icon={<FaServer color={"#8C8279"} size={"2rem"}/>}/>
        <ImageComp imgx={msql} prog={"70%"} pres={"70%"} />
        <ImageComp imgx={fire} prog={"65%"} pres={"60%"} />
        
      </Stack>
    </>
  );
}

export default DBSection;
