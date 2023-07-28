import React, { useContext, Suspense } from "react";
import { ProfileDetail } from "../../../helper/context";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Loader from "../../component/loader/Loader";
import { MenuButton } from "./MenuButton";
import { headerStyle } from "./style";

function Header({ userData }) {
  const { activeLang } = useContext(ProfileDetail);
  const { t } = useTranslation();
  let USERSTUTES = userData.userId;
  if (userData.userId === null || userData.userId === undefined) {
    USERSTUTES = false;
  } else {
    USERSTUTES = true;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Box sx={headerStyle} id="
        header">
          <MenuButton t={t} activeLang={activeLang} />
        </Box>
      </Suspense>
    </>
  );
}

export default Header;
