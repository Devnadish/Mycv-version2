import React,  {useContext}  from "react";
import { Box, Paper, Typography } from "@mui/material";
import { H1Title } from "./Utl";
import { useTranslation } from "react-i18next";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { ARfaqData,ENfaqData } from "./MDdocument/faqData";
import { ProfileDetail } from "../../helper/context";
export const FaqSection = ({ sectionColor }) => {
  const { t } = useTranslation();
  const { activeLang } = useContext(ProfileDetail);

  return (
    <>
      <Box
        id="FaqSection"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // backgroundColor: "red",
          gap: ".1rem",
          p: 4,
          minHeight: "100%",
        }}
      >
        <H1Title title={t("S14L1")} />

        <Box className="mdFile">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            
            {activeLang === "arabic" ? ARfaqData : ENfaqData}
             
            </ReactMarkdown>
        </Box>
      </Box>
    </>
  );
};
const TextBlock = ({ desc, title }) => {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          margin: "15px auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              lineHeight: "1.5em",
              color: "textColor.main",
              px: 1,
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              lineHeight: "1.5em",
              color: "textColor.main",
              px: 4,
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};
