import React from "react";
import { Box } from "@mui/material";
import { PakageNAme } from "./PakageNAme";
import { PakageAction } from "./PakageAction";
import { PakagePrice } from "./PakagePrice";
import { PakageDetail } from "./PakageDetail";

export const Pkg1 = ({ standerPkg, activeLang, t, titleColor, priceColor, pkgTitle, offerIcon, icon,price }) => {
  return (<>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "boxColor.main",
        maxWidth: "350px",
        width: "100%",
        border: "1px solid",
        borderColor:"borderColor.main",
        flexDirection: "column",
        borderRadius: 1,
        boxShadow:3
      }}
    >
      <PakageNAme
        title={pkgTitle}
        color={titleColor}
        icon={offerIcon}
        activeLang={activeLang} />
      <PakageDetail detal={standerPkg} activeLang={activeLang} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: "100%",
          gap: { xs: ".2rem", sm: "1rem" },
          borderTop: "1px solid",
          borderColor:"borderColor.main",
          p: 1,
        }}
      >
        <PakagePrice
          title={price}
          color={titleColor}
          icon={icon} />
        <PakageAction />
      </Box>
    </Box>
  </>);
};
