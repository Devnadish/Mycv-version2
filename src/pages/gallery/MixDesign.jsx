import React from "react";

import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";

import { Boxstl } from "./Boxstl";
import { ShowImagework } from "./ShowImagework";

function MixDesign() {
  const { t } = useTranslation();
  const menuAarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pakageAarray = [1, 2, 3, 4, 5];
  const posterAarray = [1, 2, 3, 4];
  const coverageArray = [1, 2];
  const designArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15];
  const flyerArray = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const infographArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const characterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          flexFlow: "wrap",
          gap: "1rem",
          overflow:"auto"
        }}
      >
        <Boxstl w={"100%"} h={"auto"} range={t("menuWork")}>
          <ShowImagework
            imageArray={menuAarray}
            baseulr={`/assets/gallery/menu/`}
            typex={t("menuWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("charachterWork")}>
          <ShowImagework
            imageArray={characterArray}
            baseulr={`/assets/gallery/character/`}
            typex={t("charachterWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("pakageWork")}>
          <ShowImagework
            imageArray={pakageAarray}
            baseulr={`/assets/gallery/package/`}
            typex={t("pakageWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("posterWork")}>
          <ShowImagework
            imageArray={posterAarray}
            baseulr={`/assets/gallery/poster/`}
            typex={t("posterWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("coverWork")}>
          <ShowImagework
            imageArray={coverageArray}
            baseulr={`/assets/gallery/coverage/`}
            typex={t("coverWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("desginWork")}>
          <ShowImagework
            imageArray={designArray}
            baseulr={`/assets/gallery/desgin/`}
            typex={t("desginWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("flyerWork")}>
          <ShowImagework
            imageArray={flyerArray}
            baseulr={`/assets/gallery/flyer/`}
            typex={t("flyerWork")}
          />
        </Boxstl>

        <Boxstl w={"98%"} h={"auto"} range={t("InfograghWork")}>
          <ShowImagework
            imageArray={infographArray}
            baseulr={`/assets/gallery/infograph/`}
            typex={t("InfograghWork")}
          />
        </Boxstl>
      </Stack>
    </>
  );
}
export default MixDesign;
