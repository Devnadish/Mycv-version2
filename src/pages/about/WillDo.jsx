import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { VscSymbolColor } from "react-icons/vsc";
import { FaUsers, FaHandshake } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { AiOutlineFileSearch } from "react-icons/ai";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
  borderRadius: 2,
  backgroundColor: "boxColor.main",

  border: "1px solid",
  borderColor: "borderColor.main",

  "&:hover": {
    border: "1px solid",
    borderColor: "borderColor.main",
  },
};

function WillDo({ activeLang }) {
  const { t } = useTranslation();
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          backgroundColor: "boxColor.main",
          width: "100%",
          gap: "1rem",
          flexWrap: "wrap",
          p: 1,
          mt: 1,
        }}
      >
        <InfoBox
          titlex={t("Ui")}
          subtitlex={t("UiDetail")}
          alt={t("Ui")}
          activeLang={activeLang}
          icon={<VscSymbolColor color={"white"} size={"1.5rem"} />}
        />
        <InfoBox
          titlex={t("Ux")}
          subtitlex={t("UxDetail")}
          alt={t("Ux")}
          activeLang={activeLang}
          icon={<FaUsers color={"white"} size={"1.5rem"} />}
        />
        <InfoBox
          titlex={t("performance")}
          subtitlex={t("performanceTitle")}
          alt={t("performance")}
          activeLang={activeLang}
          icon={<IoSpeedometerOutline color={"white"} size={"1.5rem"} />}
        />
        <InfoBox
          titlex={t("seo")}
          subtitlex={t("seoTitle")}
          alt={t("seo")}
          activeLang={activeLang}
          icon={<AiOutlineFileSearch color={"white"} size={"1.5rem"} />}
        />
        <InfoBox
          titlex={t("help")}
          subtitlex={t("helpTitle")}
          alt={t("help")}
          activeLang={activeLang}
          icon={<FaHandshake color={"white"} size={"1.5rem"} />}
        />
      </Stack>
    </>
  );
}
export default WillDo;

const InfoBox = ({ img, titlex, subtitlex, alt = "tst", activeLang, icon }) => {
  const title = {
    fontWeight: "200",
    p: 1,
    color: "orangeColor.main",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const subtitle = {
    fontWeight: "200",
    textTransform: "capitalize",
    p: 2,
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    color: "textColor.main",
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Box
          sx={{
            width: "100%",
            minWidth: "250px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "boxHeaderColor.main",
            px: 2,
            borderBottom: "1px solid",
            borderColor: "borderColor.main",
          }}
        >
          <Typography sx={title}> {titlex} </Typography>
          {icon}
        </Box>
        <Typography sx={subtitle}> {subtitlex} </Typography>
      </Box>
    </>
  );
};
