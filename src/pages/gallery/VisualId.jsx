import React from "react";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { Boxstl } from "./Boxstl";
import { ShowImagework } from "./ShowImagework";


function VisualId() {
  const { t } = useTranslation();

  const logoAarray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27,
  ];
  const identityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          flexFlow: "wrap",
          gap: 4, overflow: "auto",
        }}
      >
        <Boxstl w={"100%"} h={"auto"} range={t("IdentitiyWork")}>
          <ShowImagework
            imageArray={identityArray}
            baseulr={`/assets/gallery/identity/`}
            typex={t("IdentitiyWork")}
          />
        </Boxstl>

        <Boxstl w={"98%"} h={"auto"} range={t("logoWork")}>
          <ShowImagework
            imageArray={logoAarray}
            baseulr={`/assets/gallery/logo/`}
            typex={t("logoWork")}
          />
        </Boxstl>
      </Stack>
    </>
  );
}

export default VisualId;
