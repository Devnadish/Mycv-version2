import React, { useContext } from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { GiPriceTag } from "react-icons/gi";
import { BiHappyAlt } from "react-icons/bi";
import { ProfileDetail } from "../../helper/context";

import { FcRating } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { Pkg1 } from "./Pkg1";

function Price() {
  const { t } = useTranslation();
  const { activeLang } = useContext(ProfileDetail);
  const standerPkg = t("pkg1", { returnObjects: true });
  const standerPlus = t("pkg2", { returnObjects: true });
  const premum = t("pkg3", { returnObjects: true });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          minWidth: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          borderRadius: 1,
          overflow: "auto",
          gap: "1rem",
          my: 2,
          p: 1,
        }}
      >
        <Pkg1
          pkgTitle={t("pkg1Name")}
          standerPkg={standerPkg}
          activeLang={activeLang}
          t={t}
          titleColor={"success.light"}
          priceColor={"success.light"}
          offerIcon={<BiHappyAlt size={"1.5rem"}/>}
          price={"1850 SR"}
        />
        <Pkg1
          pkgTitle={t("pkg2Name")}
          standerPkg={standerPlus}
          activeLang={activeLang}
          t={t}
          titleColor={"primary.dark"}
          priceColor={"primary.dark"}
          offerIcon={<FcRating size={"1.5rem"} />}
          price={"3750 SR"}
        />
        <Pkg1
          pkgTitle={t("pkg3Name")}
          standerPkg={premum}
          activeLang={activeLang}
          t={t}
          titleColor={"warning.dark"}
          priceColor={"warning.dark"}
          offerIcon={<FcCallback size={"1.5rem"} />}
          price={t("oncall")}
        />
      </Box>
    </>
  );
}

export default Price;
