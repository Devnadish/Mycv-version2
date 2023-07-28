import React, { useContext, lazy, Suspense } from "react";

import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { ProfileDetail } from "../../helper/context";
import "./about.css";
import { Button } from "@mui/material";
import { AdvertisingText } from "./AdvertisingText";

const LazyDBSection = lazy(() => import("./DBSection"));
const ProgSection = lazy(() => import("./ProgSection"));
const DesignSection = lazy(() => import("./DesignSection"));
const UiSection = lazy(() => import("./UiSection"));
const WillDo = lazy(() => import("./WillDo"));
const HeroBanner = lazy(() => import("./HeroBanner"));
const Loader = lazy(() => import("../../component/component/loader/Loader"));

function Aboutme() {
  const { activeLang } = useContext(ProfileDetail);
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          userSelect: "none",
          webkitOverflowScrolling: "touch",
          padding: ".5rem",
          margin: ".5rem",
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap:"wrap",
          gap: "1rem",


        }}
      >
        {/* v.1.01.1 */}
        <Suspense fallback={<Loader />}>
          <HeroBanner activeLang={activeLang} />
          <AdvertisingText activeLang={activeLang} />
          <WillDo activeLang={activeLang} />
          <ProgSection activeLang={activeLang} />
          <DesignSection activeLang={activeLang} />
          <UiSection activeLang={activeLang} />
          <LazyDBSection activeLang={activeLang} />
        </Suspense>
      </Box>
    </>
  );
}

export default Aboutme;


