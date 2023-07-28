import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { Boxstl } from "./Boxstl";
import { ShowImagework } from "./ShowImagework";

function Sm() {
  const { t } = useTranslation();
  const smArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43,,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76
  ];
 
  
  return (
    <>
      
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          gap: 4,
          height:"100%",
         
        }}
      >
       

        <Boxstl w={"100%"} h={"100%"} range={t("uiuxWork")}>
          <ShowImagework
            imageArray={smArray}
            baseulr={`/assets/gallery/sm/`}
            typex={t("smWork")}
          />
        </Boxstl>

      </Stack>
    </>
  );
}

export default Sm;


