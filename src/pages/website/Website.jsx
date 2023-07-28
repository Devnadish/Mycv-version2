import React, { useContext } from "react";
import data from "./data.json";
import { Box, Typography } from "@mui/material";
import { ProfileDetail } from "../../helper/context";
import { useTranslation } from "react-i18next";
import { websitePageStyleTitle, websiteStyle } from "./style";
import { WebCard } from "./WebCard";
function Website() {
  const { activeLang } = useContext(ProfileDetail);
  const { t } = useTranslation();
  return (
    <>
      <Box sx={websiteStyle}>
        <Box sx={websitePageStyleTitle}>
          <Typography
            variant="h6"
            sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"textColor.main"}}
          >
            {t("SiteTemplate")}
          </Typography>
        </Box>
        {data.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <WebCard el={el} activeLang={activeLang} />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
}

export default Website;
