import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { GetStartBtn, H1Title, H3Title } from "./Utl";
import { useTranslation } from "react-i18next";
import Chip from "@mui/material/Chip";
import { ImSmile2 } from "react-icons/im";
import { MdLocalOffer } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiClassicalKnowledge } from "react-icons/gi";
export const Section5 = ({ sectionColor }) => {
  const { t } = useTranslation();

  return (
    <>
      <section id="section5">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: sectionColor,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "100%" },
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <H1Title title={t("S5L1")} />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                gap: ".2rem",
                justifyContent: "space-between",
                p:1
              }}
            >
              <Chipx title={t("S5L2")} icon={<ImSmile2 />} />
              <Chipx title={t("S5L3")} icon={<MdLocalOffer />} />
              <Chipx title={t("S5L4")} icon={<MdLocalOffer />} />
              <Chipx title={t("S5L5")} icon={<ImUsers />} />
              <Chipx title={t("S5L6")} icon={<AiOutlineDeploymentUnit />} />
              <Chipx title={t("S5L7")} icon={<BiLineChart />} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              backgroundColor: "black",
              height: "100%",
              alignItems: "center",
              mt:3
            }}
          >
            <img
              className={"section5-img"}
              src="homePageImage/image5.webp"
              alt=""
            />
          </Box>
        </Box>
      </section>
    </>
  );
};

const Chipx = ({ title, icon }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "borderColor.main",
          border: "1px solid",
          borderColor:"boxColor.main",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          px: 1,
          py: 0.4,
          gap: "1rem",
          borderRadius: 8,
         
          // width:"fitcontent"
        }}
      >
        {icon}
        <Typography
          variant="h3"
          sx={{
            // lineHeight: "2em",
            display: "flex",
            color:"boxColor.main",
            verticalAlign: "baseline",
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};
