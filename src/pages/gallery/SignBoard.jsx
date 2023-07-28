import React, { useState } from "react";

import "react-lazy-load-image-component/src/effects/blur.css";

import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";

import { Boxstl } from "./Boxstl";
import { ShowImagework } from "./ShowImagework";

function SignBoard() {
  const { t } = useTranslation();

  const signBordAarray = [1, 2, 3, 4, 5, 6];
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
        <Boxstl w={"100%"} h={"auto"} range={t("singboardWork")}>
          <ShowImagework
            imageArray={signBordAarray}
            baseulr={`/assets/gallery/sinboard/`}
            typex={t("singboardWork")}
          />
        </Boxstl>
      </Stack>
    </>
  );
}

export default SignBoard;
