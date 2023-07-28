import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { Boxstl } from "./Boxstl";
import { ShowImagework } from "./ShowImagework";

function CncDesigen() {
  const { t } = useTranslation();
  const cncArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          gap: 4,
          overflow: "auto",
        }}
      >
        <Boxstl w={"100%"} h={"auto"} range={t("cncWork")}>
          <ShowImagework
            imageArray={cncArray}
            baseulr={`/assets/gallery/cnc/`}
            typex={t("cncWork")}
          />
        </Boxstl>
      </Stack>
    </>
  );
}
export default CncDesigen;
