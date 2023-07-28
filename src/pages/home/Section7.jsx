import React,  {useContext} from "react";

import { Box, Button, Paper,  } from "@mui/material";
import { Link } from "react-router-dom";
import {arEcommerce,enEcommerce} from "./MDdocument/eCommerceData"
import { GetStartBtn, H1Title, H3Title, H2Title } from "./Utl";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { ProfileDetail } from "../../helper/context";

export const Section7 = ({ sectionColor }) => {
  const { t } = useTranslation();
  const { activeLang } = useContext(ProfileDetail);
  return (
    <>
      <Box id="section7" sx={{
            backgroundColor: sectionColor,
          }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: sectionColor,
            gap: "1rem",
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <H1Title title={t("S7L1")} colorx={"black"} />
            {/* ecommirce */}
            <ImgtBlock
              imgx={"assets/home_setction7/onlineshop.webp"}
              title={t("S7L2")}
              desc={t("S7L3")}
              howlink={t("learnHow")}
              mainlink={"متجر-الكتروني"}
              pageData= {"ecommerce"}
            />
              {/* blog */}
            <ImgtBlock
              imgx={"homePageImage/image5.webp"}
              title={t("S7L6")}
              desc={t("S7L7")}
              howlink={t("learnHow")}
              pageData= {"blogData"}
              mainlink={"المدونة"}
            />
              {/* software schdule */}
            <ImgtBlock
              imgx={"assets/home_setction7/scheduling.webp"}
              title={t("S7L10")}
              desc={t("S7L11")}
              howlink={t("learnHow")}
              mainlink={"برامج-المواعيد"}
              pageData= {"sechduleSoftWare"}
            />
              {/* potofolio */}
            <ImgtBlock
              imgx={"assets/home_setction7/proto.webp"}
              title={t("S7L14")}
              desc={t("S7L15")}
              howlink={t("learnHow")}
              pageData= {"portoFolio"}
              mainlink={"السيرة-الذاتية"}
            />
              {/* domainAndHosting */}
            <ImgtBlock
              imgx={"assets/home_setction7/domain.webp"}
              title={t("S7L18")}
              desc={t("S7L19")}
              howlink={t("learnHow")}
              pageData= {"domainHosting"}
              mainlink={"الاستظافة-اسم-النطاق"}
            />
              {/* visual */}
            <ImgtBlock
              imgx={"assets/home_setction7/branding.webp"}
              title={t("S7L22")}
              desc={t("S7L23")}
              howlink={t("learnHow")}
              pageData= {"visualIdentity"}
              mainlink={"الهوية-البصرية"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
const ImgtBlock = ({ imgx, desc, title, mainlink, howlink,pageData }) => {
  const myTheme=useTheme()
  const MAINLINK="/معلومات-عامة/"
  return (
    <>
      <Paper
        elevation={15}
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "360px",
          }}
        >
          <img className={"section5-img"} src={imgx} alt="" />
          <H1Title title={title} />
          <H3Title title={desc} />

          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              alignItems: "center",
              p: 1,
            }}
          >
            <Link
              to={`${MAINLINK}${mainlink}`}
              state={{ data: pageData }}
              style={{ color: myTheme.palette.yellowColor.main }}
            >
              {howlink}
            </Link>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
