import React,{useContext} from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
 
import { arInspire, erInspire } from "./MDdocument/insporeSite";
import { H2Title ,H1Title} from "./Utl";
import { useTranslation } from "react-i18next";
import { ProfileDetail } from "../../helper/context";

export const InspireSection = ({ sectionColor }) => {
  const { t } = useTranslation();
  const { activeLang } = useContext(ProfileDetail);


  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "1rem",
          p: 2,
        }}
      >
        <H2Title title={t("S11L1")} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          // height: "100%",
        }}
      >
       
        <ArInpire data={activeLang === "arabic" ? arInspire : erInspire} />
      </Box>
    </>
  );
};

const ArInpire = ({ data }) => {
  return (
    <>
      {data?.map((el, i) => {
        return (
          <React.Fragment key={i}>
            <Paper
              elevation={5}
              sx={{
                display: "flex",
                maxWidth: "350px",
                width: "100%",
                flexDirection: "column",
                gap: "1rem",
                p: 1,
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "borderColor.main",
                }}
              >
                <H1Title title={el.name} />
              </Box>
              <Box
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "borderColor.main",
                  p: 1,
                }}
              >
                <H2Title title={el.des} />
              </Box>
              <Box
                sx={{
                  p: 1,
                  direction: "ltr",
                 
                }}
              >
                <a href={el.link} target="_blank" 
                style={{color:"transparent"}}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width:"100%",
                      fontFamily:"latoBold",
                      color:"yellowColor.main",
                      lineHeight:"2rem",
                    }}
                  >
                    {el.link}
                  </Typography>
                </a>
              </Box>
            </Paper>
          </React.Fragment>
        );
      })}
    </>
  );
};
