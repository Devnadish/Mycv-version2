import React, { lazy, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Divider } from "@mui/material";
import { footerBox } from "./footerStyle";
import { PersonalQuastion } from "./PersonalQuastion";
import { DarklightMode } from "./DarklightMode";
import { SendMe } from "./SendMe";
import { AboutMeMenu } from "./AboutMeMenu";
import { WhatsApp } from "./WhatsApp";


const DropDawnMenu = lazy(() => import("./DropDawnMenu"));
const Loader = lazy(() => import("../../component/loader/Loader"));
const Modalme = lazy(() => import("../../component/modal/Modalme"));
const Languagebtn = lazy(() => import("./Languagebtn"));
const MainMailForm = lazy(() => import("../../mailForm/MailForm"));

const Footer = ({ setLang1, langimg, setLangimage,setThemeMode,  themeMode}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opensetting, setOpensetting] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box sx={footerBox} id="footer">
        <DarklightMode  setThemeMode={setThemeMode} themeMode={themeMode} />
        <Languagebtn  setLang1={setLang1} langimg={langimg} setLangimage={setLangimage} />
        <SendMe setOpen={setOpen}/>
        <WhatsApp/>
        <Divider orientation="vertical" flexItem sx={{backgroundColor :"green"}}/>
        <PersonalQuastion />
        <AboutMeMenu handleClick={handleClick}></AboutMeMenu>
        <DropDawnMenu  handleClose={handleClose}  anchorEl={anchorEl}  open1={open1} />
      </Box>

      {open && (
        <Suspense fallback={<Loader />}>
          <Modalme open={open} setOpen={setOpen} title={t("sendMeEmail")}>
            <MainMailForm />
          </Modalme>
        </Suspense>
      )}
    </>
  );
};
export default Footer;
