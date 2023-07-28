import React from "react";
import Stack from "@mui/material/Stack";
import html from "../../assets/expImage/icons8-html-5.svg";
import css from "../../assets/expImage/icons8-css3.svg";
import js from "../../assets/expImage/icons8-javascript.svg";
import rc from "../../assets/expImage/icons8-react.svg";
import njs from "../../assets/expImage/icons8-node-js.svg";
import { FaJs } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";
import ImageComp from "../../component/expBox1/ImageComp";
import { sectionStyle } from "./style";

function ProgSection({ activeLang }) {
  const { t } = useTranslation();

  return (
    <>
      <Stack sx={sectionStyle}>
        <SectionTitle
          title={t("devlopingtitle")}
          icon={<FaJs color={"#8C8279"} size={"2rem"} />}
        />
        <ImageComp imgx={html} prog={"90%"} pres={"90%"} />
        <ImageComp imgx={css} prog={"75%"} pres={"75%"} />
        <ImageComp imgx={js} prog={"80%"} pres={"80%"} />
        <ImageComp imgx={rc} prog={"90%"} pres={"90%"} />
        <ImageComp imgx={njs} prog={"75%"} pres={"75%"} />
      </Stack>
    </>
  );
}

export default ProgSection;
